import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../css/login.css';

function Log(){
    return(

        <div className=" container box ">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h5 className="scritte">Please sign in</h5>
                        </div>
                        <div className="panel-body pannello">
                            <form accept-charset="UTF-8" role="form">
                                <fieldset>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="E-mail" name="email" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Password" name="password" type="password" value="" />
                                    </div>
                                    <div class="checkbox">
                                        <label>
                                            <input name="remember" type="checkbox" value="Remember Me" /> Remember Me
                                        </label>
                                    </div>
                                    <input className="btn btn-lg btn-gg btn-block" type="submit" value="Login" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );

}
export default Log;