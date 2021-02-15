import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="content">
      <Navbar />
      <div className="relative sec--1">
        <img className="w-full none-phone" src="https://res.cloudinary.com/dudhmrdin/image/upload/v1613335067/b5c82b2f-bdf3-4135-8639-ddcb68a8c0a4_gn56t1.png" />
        <div className="centered-axis-xy">
          <p className="text-white font-bold text-center text-6xl custom-phone-color text-1">Fitness starts with</p>
          <p className="text-white font-bold text-center text-6xl custom-phone-color text-1">what you eat.</p>
          <p className="text-white font-light text-center text-3xl mt-5 custom-phone-color text-2">Take control of your goals. Track calories and activities</p>
          <p className="text-white font-light text-center text-3xl custom-phone-color text-2">Breakdown ingredients</p>
          <button className="py-4 flex justify-center text-lg px-16 mx-auto custom-color mt-10 bg-white rounded-sm font-semibold">Start a plan</button>
        </div>
      </div>
      <div className="mx-8 my-16">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 bg-white">
          <div className="border border-purple-100 rounded-lg p-6">
            <p className="custom-color text-lg font-semibold">Gym & Wellness</p>
            <p className="mt-4 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
          </div>
          <div className="border border-purple-100 rounded-lg p-6">
            <p className="custom-color text-lg font-semibold">Challenges</p>
            <p className="mt-4 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
          </div>
          <div className="border border-purple-100 rounded-lg p-6">
            <p className="custom-color text-lg font-semibold">Healthy Meal Plan</p>
            <p className="mt-4 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
          </div>
          <div className="border border-purple-100 rounded-lg p-6">
            <p className="custom-color text-lg font-semibold">Shop</p>
            <p className="mt-4 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
          </div>
        </div>
      </div>
      <div className="my-16 mx-8">
        <p className="text-gray-800 font-bold text-center text-4xl text-3"><span className="custom-color">Workout</span> at home at your</p>
        <p className="text-gray-800 font-bold text-center text-4xl text-3">own convenience</p>
        <p className="text-gray-800 max-w-2xl mx-auto font-light text-center text-lg my-6 text-4">We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy meal plans, you’ll have everything you need to reach your personal fitness goals – for free! </p>
        <div className="mt-16 grid gap-4 p-cards grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 mx-16">
          <div className="border border-purple-100 rounded-lg">
            <img className="rounded-lg w-full" src="https://res.cloudinary.com/dudhmrdin/image/upload/v1613338630/2fe9ad9f-0eb7-4470-a59f-e9e6ef58b8db_gzpadc.png" />
            <div className="m-6">
              <p className="text-gray-800 font-bold text-xl custom-color">Workout 1</p>
              <p className="mt-2 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
            </div>
          </div>
          <div className="border border-purple-100 rounded-lg">
            <img className="rounded-lg w-full" src="https://res.cloudinary.com/dudhmrdin/image/upload/v1613338630/2fe9ad9f-0eb7-4470-a59f-e9e6ef58b8db_gzpadc.png" />
            <div className="m-6">
              <p className="text-gray-800 font-bold text-xl custom-color">Workout 2</p>
              <p className="mt-2 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
            </div>
          </div>
          <div className="border border-purple-100 rounded-lg">
            <img className="rounded-lg w-full" src="https://res.cloudinary.com/dudhmrdin/image/upload/v1613338631/ffeb4439-7c61-438d-a970-f17313f7a0cd_ler0cy.png" />
            <div className="m-6">
              <p className="text-gray-800 font-bold text-xl custom-color">Workout 3</p>
              <p className="mt-2 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
            </div>
          </div>
          <div className="border border-purple-100 rounded-lg">
            <img className="rounded-lg w-full" src="https://res.cloudinary.com/dudhmrdin/image/upload/v1613338632/8f788b21-a7fc-40b0-b3ee-13d843c66fc7_eksieq.png" />
            <div className="m-6">
              <p className="text-gray-800 font-bold text-xl custom-color">Workout 4</p>
              <p className="mt-2 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
            </div>
          </div>
        </div>
        <button className="py-4 flex justify-center text-lg px-16 mx-auto custom-bg mt-10 text-white rounded-sm font-semibold">More Plans</button>
      </div>
      <div className="my-32 mx-8">
        <div className="">
          <div className="flex items-center bock">
              <div className="p-8 w-1/2 width-reset addition-det">
                <p className="text-gray-800 font-bold text-5xl text-5">The Tools for Your <span className="custom-color">Goals</span></p>
                <p className="mt-8 max-w-lg text-3xl text-6">Trying to lose weight, tone up, lower your BMI, or invest in your overall health?  We give you the right features to hit your goals.</p>
                <button className="py-3 text-lg px-10 custom-bg mt-6 text-white rounded-sm font-semibold">Get Started</button>
              </div>
              <div className="w-1/2 width-reset none-phone">
                <img className="w-full rounded-lg" src="https://res.cloudinary.com/dudhmrdin/image/upload/v1613340064/414bd1dd-f20d-4cbe-a8c3-f9291d378ffc_uvjrtz.png" />
              </div>
          </div>
          <div className="flex items-center bock">
            <div className="w-1/2 width-reset none-phone">
              <img className="w-full rounded-lg" src="https://res.cloudinary.com/dudhmrdin/image/upload/v1613341373/b825917d-2694-4915-9ad3-83ee2356eccd_lmplnq.png" />
            </div>
            <div className="p-8 w-1/2 width-reset addition-det">
              <p className="text-gray-800 font-bold text-5xl text-5"><span className="custom-color">Healthy</span> Meals & Recipes</p>
              <p className="mt-8 max-w-lg text-3xl text-6">Get nutritionist-approved recipes and motivational workout tips from Fitness experts.</p>
              <button className="py-3 text-lg px-10 custom-bg mt-6 text-white rounded-sm font-semibold">Explore Recipes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 sect--5 p-16">
        <p className="text-white font-bold text-5xl text-5">Calorie Counter</p>
        <p className="mt-8 max-w-lg text-3xl mt-1 text-white text-6">What's in your food? Learn about calorie count, nutrition information and serving size.</p>
        <form className="mt-10 max-w-2xl">
          <input className="py-4 w-full px-6 bg-white text-gray-800 rounded-lg border border-purple-100" placeholder="Search Foods..." /> 
        </form>
      </div>
      <Footer />
    </div>
  );
}
