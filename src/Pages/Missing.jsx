import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useMediaQuery } from 'react-responsive'
// import SideNav from '../assets/includes/SideNav';
// import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const Index = ({ project, title }) => {

   // eslint-disable-next-line react/prop-types
   const Desktop = ({ children }) => {
      const isDesktop = useMediaQuery({ minWidth: 831, maxWidth: 100000})
      return isDesktop ? children : null
   }

   // eslint-disable-next-line react/prop-types
   const Tablet = ({ children }) => {
      const isDesktop = useMediaQuery({ minWidth: 0, maxWidth: 830})
      return isDesktop ? children : null
   }

   return (
      <>
         <HelmetProvider>
            <Helmet>
               <title>{project} - {title}</title>
            </Helmet>

            <Desktop>

               <div className='flex gap-1 defaultMargin'>
                  {/* <SideNav /> */}

                  <p className='text-2xl text-red-600 font-bold'>Not Found</p>

                  <main className='w-[70%]'>

                     {/* <Header 
                        unreadMessage={unreadMessage}
                     />

                     <div className='overflow-y-auto h-screen'>
                        <BalCards
                           balance={balance}
                           recentBalance={recentBalance}
                           contestants={contestants}
                        />
                        <Notifications />
                        <VotingList />
                        <Footer />
                     </div> */}

                  
                  </main>

                  {/* <Nav /> */}

                  {/* <SideBar /> */}
               </div>

            </Desktop>

            <Tablet>

               <main className='w-[100%]'>

                  {/* <Header 
                     unreadMessage={unreadMessage}
                  />

                  <div className='overflow-y-auto h-screen'>
                     <BalCards
                        balance={balance}
                        recentBalance={recentBalance}
                        contestants={contestants}
                     />
                     <Notifications />
                     <VotingList />
                     <Footer />
                  </div> */}

               </main>

               {/* <Nav /> */}

            </Tablet>

         </HelmetProvider>
      </>
   )
}

export default Index
