import React from 'react';
import { useSelector } from 'react-redux'




function ContactUs(){

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)



    return (
        
        <main className="find-store-wrapper">
            <h1 className={`find-store-page-title theme-text-${currentTheme}-1`}>Find a Store</h1>
            {/* added theme-font-2 and border colour -- Kap */}
            <div className={`find-store-content-wrapper theme-text-${currentTheme}-1 theme-border-${currentTheme}-light theme-font-2`}>
                
                </div>
                
                


        </main>
    )

}

export default ContactUs;