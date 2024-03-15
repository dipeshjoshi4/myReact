
import React from "react"
import "./Header.css"
import pumalogo from "../Assests/puma-logo-cover.png";

const Header = () => {
    return (
        <div className="Header">

            <div>
                <img src={pumalogo} alt="PumaLogo" style={{ width: "70px" }}/>
            </div>

            <div className="list-item">
                <ul>
                    <li>New </li>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kids</li>
                    <li>Motorsport</li>
                    <li>Collabrations</li>
                    <li>Sports</li>
                    <li>Outlet</li>
                </ul>
            </div>

            {/* <div className="navbar-icon">

                    <div>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon"><path fill="transparent" d="M0 0h24v24H0z"/><path d="m19 19-4-4" stroke="currentColor" stroke-width="2"/><circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2"/></svg>
                        <p>Search</p>
                    </div>
             
                    <div>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon"><path fill="transparent" d="M0 0h24v24H0z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M18.32 7.36c-1.26-1.868-3.813-1.804-4.99.147l-.473.787h-1.713l-.475-.787C9.493 5.556 6.941 5.492 5.68 7.36c-1.044 1.547-.863 3.697.395 5.01L12 18.555l5.926-6.186c1.258-1.313 1.439-3.463.394-5.01ZM12 5.92c-2.069-2.64-6.02-2.58-7.978.32-1.561 2.312-1.314 5.507.607 7.513L12 21.445l7.37-7.692c1.922-2.006 2.17-5.2.608-7.513-1.958-2.9-5.91-2.96-7.978-.32Z" fill="currentColor" /></svg>
                    </div>
                    
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="icon"><path fill="currentColor" fill-rule="evenodd" d="M1.333 3.333H2.77l1.21 7.277c.07.418.431.724.855.724h6.669a.867.867 0 0 0 .847-.685l1.14-5.315H4.453L3.898 2H1.333v1.333ZM5.231 10l-.555-3.333h7.166L11.128 10H5.23Z" clip-rule="evenodd" /><path fill="currentColor" d="M12 12.667H4.667V14H12v-1.333Z" /></svg>
                    </div>
                
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="icon"><path fill="currentColor" fill-rule="evenodd" d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm3 4H9a3 3 0 0 0-3 3v2h12v-2a3 3 0 0 0-3-3Zm-6-2a5 5 0 0 0-5 5v3.7a.3.3 0 0 0 .3.3h15.4a.3.3 0 0 0 .3-.3V17a5 5 0 0 0-5-5H9Z" clip-rule="evenodd" /></svg>
                    </div>
                
                
            </div> */}

        </div>
    )
}

export default Header;