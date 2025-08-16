import rss from "@astrojs/rss";
import { getSortedPosts } from "@utils/content-utils";
import { url } from "@utils/url-utils";
import type { APIContext } from "astro";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import { siteConfig } from "@/config";

import { parse as htmlParser } from "node-html-parser";
import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

const parser = new MarkdownIt();

const imagesGlob = import.meta.glob<{ default: ImageMetadata }>(
	"/src/assets/images/**/*.{jpeg,jpg,png,gif,webp,svg}",
);

function stripInvalidXmlChars(str: string): string {
	return str.replace(
		// biome-ignore lint/suspicious/noControlCharactersInRegex: https://www.w3.org/TR/xml/#charsets
		/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]/g,
		"",
	);
}

export async function GET(context: APIContext) {
	const blog = await getSortedPosts();
	const siteUrl = context.site;
	if (!siteUrl) {
		throw new Error(
			'请在 `astro.config.mjs` 文件中设置 `site` 选项，这是生成有效 RSS feed 的必要条件。',
		);
	}
	const feedItems = [];

	for (const post of blog) {
		const content =
			typeof post.body === "string" ? post.body : String(post.body || "");
		const cleanedContent = stripInvalidXmlChars(content);

		const renderedHtmlString = parser.render(cleanedContent);
		const html = htmlParser.parse(renderedHtmlString);
		const images = html.querySelectorAll("img");

		for (const img of images) {
			const src = img.getAttribute("src");
			if (!src) continue;

			const assetPathIdentifier = "/assets/images/";
			const pathIndex = src.indexOf(assetPathIdentifier);

			if (pathIndex !== -1) {
				const imagePathSuffix = src.substring(pathIndex); // e.g., /assets/images/foo.png
				const imageGlobKey = `/src${imagePathSuffix}`;    // e.g., /src/assets/images/foo.png
				const imageImport = imagesGlob[imageGlobKey];

				if (imageImport) {
					const imageMetadata = await imageImport().then((res) => res.default);
					const optimizedImg = await getImage({ src: imageMetadata });
					img.setAttribute("src", new URL(optimizedImg.src, siteUrl).href);
				}
			}

			else if (src.startsWith("/")) {
				img.setAttribute("src", new URL(src, siteUrl).href);
			}
		}

		feedItems.push({
			title: post.data.title,
			pubDate: post.data.published,
			description: post.data.description || "",
			link: url(`/posts/${post.slug}/`),
			content: sanitizeHtml(html.toString(), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
			}),
		});
	}

	return rss({
		title: siteConfig.title,
		description: siteConfig.subtitle || "No description",
		site: siteUrl,
		items: feedItems,
		customData: `<language>${siteConfig.lang}</language>`,
	});
}