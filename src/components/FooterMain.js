


function FooterMain(){

    return(
        
            <footer className="footer" id="foorear">
                <div className="container">
                    <footer className="py-5" />
                        <div className="row">

                            <div className="col-md-5 offset-md-1 mb-3">
                                <form />
                                    <h5>Subscribe to our newsletter</h5>
                                    <p>
                                        Monthly digest of what's new and exciting
                                        from us.
                                    </p>
                                        <div id="email-form" className="d-flex flex-column flex-sm-row w-100 gap-2" />
                                        <label for="email" className="visually-hidden">Email address</label>
                                        <input id="email" type="email" name="email" required className="form-control" placeholder="Email address" />
                                        <button className="btn" href="#foorear" type="submit" id="footer">
                                            Subscribe
                                        </button>
                                    
                                <form/>

                            </div>
                            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                                <p>© 2023 Beybee_Marcus | Company, Inc. All rights reserved.</p>
                                
                            </div>
                        </div>


                    <footer/>
                </div>
            </footer>

        

        

    )

}

export default FooterMain;