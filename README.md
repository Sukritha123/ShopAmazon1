# ShopAmazon1

Web Automation framework to test Amazon website.

Project Title : ShopAmazon1

Description: 
This project is to develop a web automation test framework to test Amazon website.  This task is achieved with Cypress using Javascript.
 

Additional Features :

	1. Custom command is implemented for 'login' functionality to improve code reuse. 
	2. Fixture file is used to store test values for email, password, product names, menu options. So these test values are not hardcoded in test scripts. 
	3. Retries functionality has been added. To automatically rerun failed test due to environment. 
  4. Assertions have been used to test the behaviour and data values.
	
Execution Instruction:

	1. Copy the Git Hub URL.
	URL - https://github.com/Sukritha123/ShopAmazon1.git
	
	2. Open Visual Studio Code and open the terminal

	3. Clone the Git Hub repository. Type below command and press ENTER. Repository will be cloned.
	git clone https://github.com/Sukritha123/ShopAmazon1.git

	4. Open the project folder. Type below command and press ENTER.
	cd ShopAmazon1
	
	5. Install all project dependencies. Type below command and press ENTER.
	npm install

	6. Run the below command as per execution requirement:
		a. To open the test runner and click to run test - 
		npx cypress open 
		
		b. To run in electron browser and  headless mode
		npx cypress run
		
		c. To run test in chrome browser and headed mode
		npx cypress run --headed --browser chrome  
		
		
Recommendations: 

		1. I would recommend to use Electron Browser and Headless mode for faster test execution. But other Browsers can be used if the need arises. Especially during development/ debugging in headed mode. 
		

Screenshots of execution reports: 

![Screenshot_Overall](https://github.com/Sukritha123/ShopAmazon1/assets/144372708/6a667915-2162-4940-a078-b575e9b37f82)
![Screenshot_individual_tests](https://github.com/Sukritha123/ShopAmazon1/assets/144372708/191b6ebd-5688-4ade-8dd9-751eafb78312)
