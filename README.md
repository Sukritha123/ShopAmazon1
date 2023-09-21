# ShopAmazon1

Web Automation framework to test Amazon website and demonstrate cross browser testing using other websites.

Project Title : ShopAmazon1

Description: 
This project is to develop a web automation test framework to test Amazon website and demonstrate cross browser testing using other websites.  This task is achieved with Cypress using Javascript using Page Object Pattern. 
 

Additional Features :

	1. Custom command is implemented for 'login' functionality to improve code reuse. 
	2. Fixture file is used to store test values for email, password, product names, menu options. So these test values are not hardcoded in test scripts.  
 	3. Assertions have been used to test the behaviour and data values.
  	4. Page Object Pattern model is implemented. 
   	5. Window alerts are captured and validated.
    	6. Cross Domain testing is performed.
	
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

![image](https://github.com/Sukritha123/ShopAmazon1/assets/144372708/de9a0257-dd5d-4cd3-b570-0abd8f388f4e)
![image](https://github.com/Sukritha123/ShopAmazon1/assets/144372708/6504234e-831f-4d4d-9302-3308d04f5e9f)






