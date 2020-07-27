---
id: gitcommands
title: 'Git-Commands'
sidebar_label: 'Git-Commands'
---

## Contents

- [Basic Git Setup](#basic-git-setup)
- [Creation of Git Repository](#creation-of-a-git-repository)
- [Staging and Commiting Changes](#staging-and-commiting-changes-in-a-git-repository)
- [Branches in Git](#branches-in-git)
- [Git Remote Repository Setup](#git-remote-repository-setup)
- [Remote to Local Repository Setup](#remote-to-local-repository-setup)

## Basic Git Setup

- To check git version

```shell
git --version
```

- To setup global username

```shell
git config –global user.name “Your Name”
```

- To know the username

```shell
git config user.name
```

- To set the email with the username

```shell
git config –global user.email “Github Email”
```

- To list all the usernames with their email

```shell
git config –list
```

## Creation of a Git Repository

- To initiate the git repository

```shell
git init
```

- To know the status of the modifications done

```shell
git status
```

## Staging and Commiting Changes in a Git Repository

- To add the file or folder for staging

```shell
git add filename
git add foldername
```

- To add multiple files or folders for staging at once

```shell
git add filename foldername foldername
```

- To add all files and folders to staging

```shell
git add .
```

- To unstage the file from the staging

```shell
git rm –cached filename
git restore --staged filename
```

- To commit the changes

```shell
git commit -m “Commit Message”
```

- To log all the detailed history of commits

```shell
git log
```

- To log history of commits in short brief (single line)

```shell
git log --oneline
```

- To go back to the previous commit

```shell
git checkout commitid
```

- To revert back to the previous commit from the present commit

```shell
git revert commitid
```

- To remove all the commits and return to the very initial commit

```shell
git reset commitid
```

- To forcefully remove all commits without any prompts and history

```shell
git reset commitid –hard
```

## Branches in Git

- To check/know the present branch

```shell
git branch
```

- To take to the desired branch

```shell
git branch branchname
```

- To move out from the present branch to the targeted branch

```shell
git checkout branchname
```

- To delete the selected branch forcefully (-d is used when it is not merged)
  - NOTE: First be at another branch apart from targeted branch during deletion

```shell
git branch -d branchname
```

- To delete the selected branch forcefully (-D is used when it is merged)
  - NOTE: First be at another branch apart from targeted branch during deletion

```shell
git branch -D branchname
```

- To create new branch
  - NOTE: It does two things at once, first creates the new branch and shifts on it

```shell
git checkout -b newbranchname
```

- To merge the branch with the master
  - NOTE: Before merge any branch, we should commit all the changes and then move to the master node

```shell
git merge branchname
```

## Git Remote Repository Setup

- To show all the remote git repositories

```shell
git remote
```

- To show all the remote git repositories with the link
  - NOTE: `v` stands for verbose

```shell
git remote -v
```

- To pdd the remote URL and push on it

```shell
git push remote add origin gitrepourl
```

- To push local repository to the remote repository online at the branch master of remote

```shell
git push origin master
```

- To push forcefully local repository to remote repository online at the branch of master of remote

```shell
git push origin master --force
```

- To delete the remote repository mentioned as arguement (remote name) and its URL from its memory

```shell
git remove rm remotename
```

- To push instantly (when origin is already set)

```shell
git push
```

## Remote to Local Repository Setup

- To clone the remote repository to the local machine

```shell
git clone URL
```

- To update the remote changes into the local repository

```shell
git pull
```
