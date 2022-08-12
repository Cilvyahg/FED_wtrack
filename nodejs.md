# NODE JS (Angela web deve complete bootcamp)

The Node REPL (Read Evaluation Print Loops)

to get into the node environment type in : node 



Node js 
document bestaat  niet in node js en window mist ook heel veel eigenschappen.
alles kan in node js wat niet te maken heeft met document.

startpunt van node js is javascript en niet het document en niet direct dus met een browser te maken heeft.

node js is wel in staat om met documenten te werken alleen het is niet het startpunt. 

voordeel van node js :
je hoeft niet rekening te houden met verschillende browser
je hoeft dus alleen je code voor node js te schrijven.

node js is de backend versie van de normale javascript in de browser

npm is de package manager van node.js
nod




**to get out of the node REPL**
.exit
crtl + c (2x)

## GIT WORKFLOW

Platform such as GitHub gives the possibility to collaborate, this process is called GIT workflow

Note: new project on GitHub have a main branch instead of a master branch.

The basic Git workflow goes something like this:

-You modify files in your working tree.

-You selectively stage just those changes you want to be part of your next commit, which adds only those changes to the staging area.

-You do a commit, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory.

If a particular version of a file is in the Git directory, it’s considered committed. If it has been modified and was added to the staging area, it is staged. And if it was changed since it was checked out but has not been staged, it is modified.

# BRANCHING
Branching means you diverge from the main line of development and continue to do work without messing with that main line

**GIT TUTORIAL**
GIT is a distributed VCS = Version Control System

git help
git help config
git help add
q (stands for done )


Git commands

gives and extended list :
COMMANDS:
ls -la 

git init (initializing git in the director, dus .git aanmaken)
ls -la (zie in de lijst of er nu .git staat)

rm -rf .git (de git in de directory verwijderen)

git init (voeg je deze weer toe. )

openen in vscode
code . (code met punt betekent open dit.)

// CREATE A GITIGNORE FILE
welke files en mappen moeten worden verborgen; plaatst deze in de .gitignore file :

touch .gitignore 


// GIT ADD

git add . (to add everthing to the staging area)
git add .index.html (enkel de index.html toevoegen aan de staging area)

// GIT RESET (remove files from the staging area)

git reset index.html (alleen the index html will be removed from the staging area)

git reset (reset all files to untracked)

// GIT LOG
git log 
git log --all (laat alle branches zien)

(geeft aan wat en wie hebben gecommit en ook de hash nummer zie beneden)

cilvya@Cillie-codes-MBP testing % git log
commit 9c29b633bd19f951b026788a1ccc58a844fa171a (HEAD -> master)
Author: Cilvya <cilvya.hg@gmail.com>
Date:   Mon Jul 25 13:43:30 2022 +0200

    initial commit\


// GIT DIFF
git diff  

it will show the changes you made to the code


|| pulling

git pull origin main/master

|| CREATING A NEW BRANCH

git checkout -b 'branchName'
git status
git add . 
git commit -m "what you have changed"
git push origin branchName  // so not the default Main/Master since it has to be reviewed first 


# MARKDOWN CONCEPT

_hello_ [ to make it italics ] 

# Header one
## Header two
### Header three
#### Header four
##### Header five
###### Header six


|| LINK TOEVOEGEN [text] (url) 

Search for it. [visit my Github](https://github.com/Cilvyahg)

|| ADD IMG  --> ![text] (url)

![image from a cat](https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)


|| BLOCKQUOTES 
> "The sin of doing nothing is the deadliest of all the seven sins. It has been said that for evil men to accomplish their purpose it is only necessary that good men should do nothing."

>"The sin of doing nothing is the deadliest of all the seven sins. It has been said that for evil men to accomplish their purpose it is only necessary that good men should do nothing."


|| MAKING LISTS

* Milk
* Eggs
* Salmon
* Butter

|| LINE BREAKS

. You can accomplish this by inserting two spaces after each new line. This is not possible to see, since spaces are invisible, but it'd look something like this:

We pictured the meek mild creatures where .       
They dwelt in their strawy pen .  
Nor did it occur to one of us there .  
To doubt they were kneeling then.

## How does the internet works?

