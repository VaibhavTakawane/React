import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Theme from './components/Theme'
import LinkComp01 from './components/LinkComp01'
import User from './components/UserComp02'
import Loading from './components/Loding03'
import UserFormObj from './components/UserFormObj04'
import UserFormUpdate05 from './components/UserFormUpdate05'
import UseEffect06 from './components/UseEffect06'

import Users07_1 from './components/Users07_1'

// IMPORTS FOR 08 FOLDER
// import Post from './components/IG08/Posts'--------------
import Post from './components/ComponentsAsObjects08/FB08/Posts'
import FBTimeline from './components/ComponentsAsObjects08/FB08/FBTimeline'
import IGTimeline from './components/ComponentsAsObjects08/IG08/IGTimeline'

function App() {
  return (
    <>
      {/* <Theme /> */}
      {/* ----------------------------------------------------------------------------------------------- */}
      {/* 01 */}

      {/* <LinkComp01 link="http://www.w3schools.com/react/" name = "React Tutorial" p="React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components."/>
     <div className='flex text-2xl content-center justify-center'>
      <h1>this is h1 tag and this is div</h1>
     </div>
     <LinkComp01 link= "https://legacy.reactjs.org/" name= "React Native · Learn once, write anywhere" p="React is a JavaScript library for building user interfaces using declarative, component-based views, and can render on the server and mobile." />
     <LinkComp01 link= "https://reactnative.dev/" name= "React – A JavaScript library for building user interfaces" p=" React Native is a JavaScript library for building native apps for Android, iOS, and more, using platform agnostic components.." />
       */}

      {/* ----------------------------------------------------------------------------------------------- */}
      {/* 02  */}

      {/* <User
       name="Ram"
       sal="12345"
      /> */}
      {/* ----------------------------------------------------------------------------------------------- */}

      {/* 03 */}
      {/* <Loading/> */}

      {/* ----------------------------------------------------------------------------------------------- */}
      {/* 04 */}
      {/* PASSING OBJECT TO THE USEsTATE */}
      {/* <UserFormObj/> */}

      {/* ----------------------------------------------------------------------------------------------- */}
      {/* 05 */}
      {/* PASSING ARRAY TO THE USESTATE */}
      {/* <UserFormUpdate05 /> */}

      {/* ----------------------------------------------------------------------------------------------- */}

      {/* <UserFormUpdate05 /> */}
      {/* 06 */}
      {/* <UseEffect06 /> */}

      {/* ----------------------------------------------------------------------------------------------- */}
      {/* 07 */}
      {/* USE CONTEXT HOOK */}
      {/* <Users07_1 /> */}
      {/* ----------------------------------------------------------------------------------------------- */}
      {/* 08 */}
      {/* COMPONENTS AS OBJECTS */}

      {/* <div className='flex justify-center'>
        <div>
          <h1>This is Facebook Portal</h1>
          <FBTimeline.Post data={"POST"} />
          <FBTimeline.Reels value={"REELS"} />

          <hr />

          <h1>This is Instagram Portal</h1>
          < IGTimeline.Post />
          < IGTimeline.Reels />

        </div>
      </div> */}

      {/* ----------------------------------------------------------------------------------------------- */}


    </>
  )
}
export default App