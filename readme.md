## 开发
```
yarn global add parcel-bundler
parcel src/index.html
```
## 命令行
```
parcel build src/index.html --no-minify
rm -rf dist
parcel build src/index.html --no-minify
parcel build src/index.html --no-minify --public-url ./
git init
gst

创建文件.gitignore
并输入
/.cache/
/node_modules/
再次gst

git add .
git commit -v
git remote add origin git@github.com:lcfjxzk/MVC-demo-1.git
git push -u origin master
```