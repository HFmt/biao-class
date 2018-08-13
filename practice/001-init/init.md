##前置工作

- 下载Chrome浏览器
- 下载编辑器 VS Code 
- 下载Git，git-scm.com
- 配置Git
  - git config --global user.name "feimaotui"
  - git config --global user.email "changhui1118@foxmail.com"

- 创建表教室目录
- biao-class
	- practice
		- 001
	- project
- 初始化仓库
  - cd biao-class   （进入目录）
  - git init （初始化仓库）
  - git add . （将仓库所有的修改存入暂存区）
  - git commit -m "开始的开始" （打点保存，名为开始的开始）
  - git remote add origin https://github.com/jlzm/biao-class.git (添加远程仓库) 账号密码模式
                          git remote add origin git@github.com:user_name/user_repo.git ssh key 模式
  - git push -u origin master  (把本地代码推到'origin'[github])

- 3步重复
  - git add .
  - git commit -m "开始的开始" （打点保存，名为开始的开始）
  - git push -u origin master (把本地代码推到'origin'[github])

   - 更改仓库地址
     - git remote set-url origin https://github.com/jlzm/biao-class

     - git remote show origin (查看绑定的仓库地址)

     git add . ; git commit -m '项目同步'  ; git push -u github master ; git push -u gitee master


  git remote add gitee