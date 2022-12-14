<a name="readme-top"></a>

## Table of Contents

- [About The Project](#about-the-project)
- [Project Spec](#project-spec)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Front End Installation](#fe-installation)
- [Back End Installation](#be-installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contact](#contact)

---

## About The Project
Frugal Foods is a bargain grocery shopping application. The user is met at the homescreen with a zipcode search, where they will enter their zipcode and search stores nearest to them. They are able to then select stores they want to shop at and POST those stores to our BE server to be associated with their user ID. From this point the user is able to search for specific grocery items from the stores they've selected and compare prices to find the most affordable option. The user can then add a grocery item to their "cart", where they will see a detailed list of what they're purchasing broken down by store. Additionally, there will be a sum total for what they will spend at each store and what they will be spending overall. 

[Deployed Link](https://student-flashcards-final.vercel.app/)
![2022-11-12 17 59 46](https://user-images.githubusercontent.com/11345457/201500572-140f2bc8-eacb-4cab-9b4e-56c2805ce8fe.gif)
![2022-11-12 18 02 59](https://user-images.githubusercontent.com/11345457/201500618-29ee3b1d-e2ee-40ef-903a-6b85cbd26f3f.gif)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Spec

Frugal Foods is the capstone project built in weeks 19-21 of [Turing School of Software and Design](https://turing.edu/) front-end and back-end engineering program. The goals of this [group project]([https://frontend.turing.edu/projects/module-3/showcase.html](https://mod4.turing.edu/projects/capstone/)) were to:

- Gain exposure working on a full stack team
- Teach ourselves a new technology (we chose GraphQL for both the FE and BE teams)
- Utilize Lighthouse and Wave for accessibility
- Utilize React and React Router
- Test the UI/UX using Cypress

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Apollo GraphQL](https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

You can find both the FE repository and BE repository [here]([https://github.com/dsweeny1/Student-Flashcards-final](https://github.com/orgs/Frugal-Foods/repositories)).

### Front End Installation

1. Clone both repos, making sure to add them to their own directories
   ```sh
   git clone git@github.com:Frugal-Foods/frugal-foods-fe.git
   ```

2. For Student Flashcards: Install NPM packages
   ```sh
   npm install
   npm start
   ```
3. Explore the website.

### [Back End Installation](https://github.com/Frugal-Foods/Frugal-Foods-BE)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage
- [ ] Allow for price comparison for those grocery shopping on a budget

## Future Iterations:

- [ ] Due to rate limiting for free usage of both the Target and Kroger API's, our prototype only includes data from two zipcodes. Our goal moving forward to make this application more dynamic is to make live API calls to return data for any user in any zipcode.
- [ ] Implement authentication, allowing a user to create an account and have their popular stores and items remembered
- [ ] Implement 'shop by department' feature that allows user to browse all products for a store along with the ability to search for a specific item.
- [ ] Collect data for other popular grocery stores to allow the user more options when choosing stores near them.
- [ ] Implement 'cheapest in one stop' feature that allows a user to search all items on their grocery list and see which store would have the cheapest total if they only wanted to stop at one store.
- [ ] Implement a map feature that creates a route for the user depending on which stores were chosen.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing

We utilized tesing to create a smooth user experience using [Cypress](https://www.cypress.io/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Danielle Sweeny - [LinkedIn](https://www.linkedin.com/in/danielle-sweeny-75b50b84/) [GitHub](https://github.com/dsweeny1)
Nicole Forseth - [LinkedIn](https://www.linkedin.com/in/nicoleforseth/) [GitHub](https://github.com/forsethnico)
Derek Cooper - [LinkedIn](https://www.linkedin.com/in/derek-cooper-a8798323a/) [GitHub](https://github.com/coopercodex)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

