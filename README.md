<a name="readme-top"></a>
# 💲🍎Frugal Foods🍞💲

## Table of Contents

- [About The Project](#about-the-project)
- [Links](#links)
- [Features](#features)
- [Learning Goals](#learning-goals)
- [Technologies](#technologies)
- [Setup](#setup)
- [Future Iterations](#future-iterations)
- [Contributors](#contributors)

---

## About The Project
Frugal Foods is a bargain grocery shopping application. The user is met at the homescreen with a zipcode search, where they will enter their zipcode and search stores nearest to them. This prototype currently has two zipcodes available for demo: '80108' and '80206' and will only return stores under the Target and Kroger store portfolio. They are able to then select stores they want to shop at and POST those stores to our BE server to be associated with their user ID. All FE endpoints are utilizing GraphQL Apollo client for communication to our Back End server. From this point the user is able to search for specific grocery items from the stores they've selected and compare prices to find the most affordable option. The user can then add a grocery item to their "cart," where they will see a detailed list of what they're purchasing broken down by store. Additionally, there will be a sum total for what they will spend at each store. Items are also able to be deleted from the cart and update the quantity of each item. Visit our deployed webpage below to check it out!

## Links
- [Deployed Webpage](https://frugal-foods.herokuapp.com/)
- [Project Spec](https://mod4.turing.edu/projects/capstone/index.html)
- [Design Wireframe](https://www.figma.com/file/4PSgP18twQWUYrpUmsCWAt/Untitled?node-id=0%3A1&t=VFqO88r2YYckAD7I-0) 
- [Kroger API](https://developer.kroger.com/reference/)
- [Target API](https://www.redcircleapi.com/docs/target-product-data-api/overview)

## Features
User can search by zipcode (for ex.'80108') and select their chosen stores. Then search for items and add items to cart with a quantity: 
![add-items-frugal-foods](https://user-images.githubusercontent.com/18154724/207734272-be5cb218-b536-4b58-b3b0-681ee045ae57.gif)

User can then view items added to their cart that are separated out by which store the items are located at and the total price for each store. The user can then update quantity and delete items from cart. 
![view-cart-frugal-foods](https://user-images.githubusercontent.com/18154724/207735803-5cc696dd-9a30-4523-a01c-d3e02338d0ef.gif)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Learning Goals

Frugal Foods is the capstone project built during a two week timeframe during [Turing School of Software and Design](https://turing.edu/) front-end and back-end engineering program. The goals of this group project were to:

- Gain exposure working on a full stack team and focus on communication between front-end and back-end teams
- Teach ourselves a new technology (we chose GraphQL for both the FE and BE teams)
- Achieve >80% test coverage on the Front End application utilizing [Cypress](https://www.cypress.io/) to create a smooth user experience
- Use an agile process to turn well defined requirements into deployed and production ready software and hold daily standups and weekly retros
- Implement continuous integration tools to build and automate the deployment of features such as CircleCI, Fly.io, and Heroku
- Build application that meets our MVP(minimum viable product) and execute in development, test, CI, and production environments

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Apollo GraphQL](https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white)
![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)
![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Setup

You can find both the FE repository and BE repository in the Frugal Foods [organization](https://github.com/orgs/Frugal-Foods/repositories).

### [Front End Installation](https://github.com/Frugal-Foods/frugal-foods-fe)

1. Clone both repos, making sure to add them to their own directories
   ```sh
   git clone git@github.com:Frugal-Foods/frugal-foods-fe.git
   ```

2. Install NPM packages:
   ```sh
   npm install
   npm start
   ```
3. Explore the website at ```https://localhost:3000```!

### [Back End Installation](https://github.com/Frugal-Foods/Frugal-Foods-BE)
View the README in the back end repository for further setup instructions. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Future Iterations

- [ ] Due to rate limiting for free usage of both the Target and Kroger APIs, our prototype only includes data from two zipcodes. Our goal moving forward to make this application more dynamic is to make live API calls to return data for any user in any zipcode.
- [ ] Implement authentication, allowing a user to create an account and have their popular stores and items remembered
- [ ] Implement 'shop by department' feature that allows user to browse all products for a store along with the ability to search for a specific item.
- [ ] Collect data for other popular grocery stores to allow the user more options when choosing stores near them.
- [ ] Implement 'cheapest in one stop' feature that allows a user to search all items on their grocery list and see which store would have the cheapest total if they only wanted to stop at one store.
- [ ] Implement a Google maps feature that creates a driving route for the user depending on which stores were chosen and their respective addresses.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributors

Front End Team:
- Danielle Sweeny - [LinkedIn](https://www.linkedin.com/in/danielle-sweeny-75b50b84/) | [GitHub](https://github.com/dsweeny1)
- Nicole Forseth - [LinkedIn](https://www.linkedin.com/in/nicoleforseth/) | [GitHub](https://github.com/forsethnico)
- Derek Cooper - [LinkedIn](https://www.linkedin.com/in/derek-cooper-a8798323a/) | [GitHub](https://github.com/coopercodex)

Back End Team:
- Alaina Kneiling - [LinkedIn](https://www.linkedin.com/in/alaina-noel/) | [GitHub](https://github.com/Alaina-Noel/)
- Sid Mann - [LinkedIn](https://linkedin.com/in/sidmann) | [GitHub](https://github.com/sjmann2)
- Carter Ball - [LinkedIn](https://www.linkedin.com/in/carter-ball-01b669160/) | [GitHub](https://github.com/cballrun)
- Rebecka Hendricks - [LinkedIn](https://www.linkedin.com/in/rebecka-hendricks/) | [GitHub](https://github.com/rebeckahendricks)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

