---
title: 剪贴板
published: 2025-09-27
description: 保存文本以备忘
image: ''
tags: [剪贴板]
category: 剪贴板
draft: false 
---

git clone proxy
```
https_proxy=http://127.0.0.1:7897 git clone [REPO_URL]
```

deploy daily-fortune-api and restart its service
```
cd /var/www/daily-fortune-api/ && git fetch origin && git reset --hard origin/main
sudo systemctl restart daily-fortune-api --no-pager
sudo systemctl status daily-fortune-api --no-pager
```

mongodb restore
```
mongorestore --db daily_fortune --drop /Users/user/Downloads/daily_fortune_backup-2025-09-27_07-50-54/daily_fortune 
```

react项目
```
tree . -L 3 --prune -I "node_modules|package-lock.json" > t.txt && find . -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.html" -o -name "*.json" -o -name "*.css" -o -name "*.md" \) -not -path "./node_modules/*" -not -name "package-lock.json" -exec echo "" \; -exec echo "=== {} ===" \; -exec cat {} \; >> t.txt
```

python项目
```
tree . -L 3 --prune -I "venv" > t.txt && find . -type f \( -name "*.py" -o -name "*.md" \) -not -path "./venv/*" -exec echo "" \; -exec echo "=== {} ===" \; -exec cat {} \; >> t.txt
```

android项目
```
tree . -L 5 > t.txt && find . -path '*/build' -prune -o -type f \( -name "*.xml" -o -name "*.properties" -o -name "*.java" -o -name "*.kt" -o -name "*.kts"  -o -name "*.toml"   -o -name "*.xml" \) -exec echo "" \; -exec echo "=== {} ===" \; -exec cat {} \; >> t.txt
```

提示词
```
请编写bash脚本用于一键更新当前项目代码，将本次修改的文件的完整代码写入此脚本。此脚本将在 [/Users/user/AndroidStudioProjects] 运行，此目录下包含 [SmsForwarder] 项目源代码。
```

```
编程助手。当用户有修改代码的需求时，你需要给出需要修改的文件的修改后的完整代码，不要省略。
```

```
请阅读以下代码，了解实现的功能，后续将根据此代码提出修改需求。
```
