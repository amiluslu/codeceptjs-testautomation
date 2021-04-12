# Getting Started

### About

Aim of this project, Testing a website with end to end scenarios using CodeceptJs.

Explanation of Key Points:

    * TestReport Folder -->
        There is Allure Reporting integration, it creates a HTML file that reports the results of automated scenarios.
        It is optional and if you want to see results in Allure, you have to run with another command.
            
    * Screenshot Folder -->
        Takes the screenshot of failed automation test scenarios into output folder.
    
    * Video Folder -->
        Takes the video of failed automation test scenarios into output/video folder.

    * Selenoid -->
        Tests are runs in docker containers. (Dockerized Chrome browsers). In config file, you can change browser that you want.
        
    * Specifications -->
        codecept.conf.js file contains configuration also for headless or not.
        Tests can be runned in parallel using CodeceptJS multiple specs.
        Also added start.sh for running a shell script in one shot. In shell script, run command is not integrated with Allure.
        CodeceptJs Data Driven are applied in last scenario.

## Install & Run

In order to run this project; 

    1) You have to install Node.js, CodeceptJs. 
    2) git pull
    3) Switch to directory that pulled.

### `npm install`

Install all dependencies about project. After that run, 

### `npx codeceptjs run`

Runs all tests in project. If you want to run 

## Additional Informations

As I explained in above, Allure Reporting framework is integrated in project. If you run below command, report can be generated; 

### `npx codeceptjs run --plugins allure`

After test execution is done, Allure creates a HTML report, that contains status,steps and log informations in a report. 
In addition, you can see the screenshots and videos of failed scenarios. 

In order to open a HTML report, you have to run in below command; 

### `allure serve output`



#### You can check the references in below.
* [CodeceptJs Documentation](https://codecept.io/basics/)
* [Selenoid](https://aerokube.com/selenoid/latest/)
* [CodeceptJS & Allure Integration](https://codecept.io/reports/#allure)
* [NodeJS Documentation](https://nodejs.org/en/)

