import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import {useState, useEffect} from 'react'

// Define your primary and secondary keys
const primaryApiKey = '18f35ef1b340438fb7a35bb491277a7a';
const secondaryApiKey = '4f6a6c24ca484be4b6c1fc82e4727b71';

const config = {
  headers: {
    'Primary-Key': primaryApiKey,
    'Secondary-Key': secondaryApiKey,
  },
};

const Container = styled.div`

  background: linear-gradient(135deg, #ff9a8b, #ffc3a0);
  padding: 20px;
  text-align: center;
  color: #333;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #6a0572;
`;

const ContentContainer = styled.div`
  background: linear-gradient(135deg, #f4c542, #ffb142);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  color: #333;
`;

const InfoTitle = styled.h2`
  font-size: 24px;
  color: #ff6b6b;
`;

const InfoText = styled.p`
  font-size: 16px;
  color: #444;
  margin-top: 10px;
`;

const InfoLink = styled.a`
  color: #007BFF;
  text-decoration: none;
`;

function Greeting() {
    const [info, setInfo] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://api.nhs.uk/mental-health', config);
          // Handle the response as needed
        } catch (error) {
          console.error('Error fetching mental health information:', error);
        }
      };
      
      // Call fetchData when needed
      fetchData();
    }, []);
  return (
    <header>
  <nav
    class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
    data-te-navbar-ref>
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <div class="flex items-center">
        <button
          class="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContentX"
          aria-controls="navbarSupportedContentX"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="[&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-7 w-7">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </span>
        </button>
      </div>

      <div
        class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContentX"
        data-te-collapse-item>
        <ul class="mr-auto flex flex-col lg:flex-row"data-te-navbar-nav-ref>
          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <Link
    to="/chatbot" // Use the "to" prop to specify the target route
  >Chatbot
  </Link>
  </li>
          <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <Link to="/songs">
              Songs
            </Link>
          </li>
          <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <Link
    to="/movies" // Use the "to" prop to specify the target route
  >Movie
  </Link>
          </li>
          <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <Link
    to="/books" // Use the "to" prop to specify the target route
  >Book
  </Link>
          </li>
          <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <Link
    to="/website" // Use the "to" prop to specify the target route
  >Website
  </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* <section class="text-gray-600 body-font">
  <div class="">
    <div class="">
      <img alt="feature" class="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1618588507085-c79565432917?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww"/>
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Movie Recommender</h2>
          <p class="leading-relaxed text-base">Check out our very own movie Recommender System</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Song Recommender</h2>
          <p class="leading-relaxed text-base">Check out our very own song Recommender system</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Chatbot</h2>
          <p class="leading-relaxed text-base">Talk to hugging face </p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Your Mental Health Matters</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Read our beautifully curated mental health articles you can read</p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</button>
  </div> */}
{/* </section> */}
<Container>
      <Title>Mental Health Information</Title>
      <ContentContainer>
        {info && (
          <>
            <InfoTitle>{info.title}</InfoTitle>
            <InfoText>{info.description}</InfoText>
            <InfoLink href={info.link} target="_blank" rel="noopener noreferrer">
              Learn More
            </InfoLink>
          </>
        )}
      </ContentContainer>
    </Container>
</header>


  );
}

export default Greeting;
