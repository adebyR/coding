# All Necessary of GIT commands

Before starting any git command start with 

`git config –global user.name “[name]”` and `git config –global user.email “[email address]” ` to add user to any commit

## 1. git init
`git init` help us to initialise a git in our project where we get a new ``.git`` directory in our root project folder

## 2. git clone
`git clone` help us download a repository from an existing URL

## 3. git status
`git status` gives  information on working tree status

## 4. git log
`git log` list all the version of the opened branche


## 5. git branch
`git banch` list all branches 


## 6. git checkout -b <branch name>
`git checkout -b <branch name>` help us creat a new branch and open it


## 7. git checkout <branch name>
`git checkout <branch name>` help us go from one branch to another


## 8. git add . or git add <file name>
`git add . or git add <file name>` help us add all the changes made in the repository

## 9. git commit -m"Commit message"
`git commit -m"Commit message"` help us save and state any modification made on the repository


## 10. git commit --amend --no-edit
`git commit --amend --no-edit` help us save small changes made without having to state them 


## 11. git push origin <branch name>
`git push origin <branch name>` sends all changes made on the working repository to your remote repository


## 12. git pull <branch name>
`git pull <branch name>` fetch and merge your remote repository to your working repository


## 13. git fetch
`git fetch` pull the remote branches to the working repository


## 14.git push origin <branch name> -f
 `git push origin <branch name> -f` send all the changes made locally without changing the previous amended commit message 

## 15. how to resolve a conflict in code
you merge the branches and using `git pull`then make are the necessary changes in your code then use `git add .` to add the changes in your branches then `git commit` which opens a page where when u press `i` it will let u write all the commit you want then to save those commit you first press `ESC` then press `:wq!` after you can save it remotely by pressing `git push origin <branch name>`

For more necessary commands visit 
`https://dzone.com/articles/top-20-git-commands-with-examples`
