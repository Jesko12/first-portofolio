import React from 'react';
import {AppWrapper, AuthContainer, SvgWrapper} from "./rootElements";
import {ReactComponent as Dot} from "../../assets/dot.svg";
import {ReactComponent as Ellipse} from "../../assets/ellipse.svg";
import Joi from "joi-browser";
import Form from "../../common/form";
import auth from "../../services/authService";
import { toast } from "react-toastify";

class RootScreen extends Form {
    state = {
        data: {
            email: "",
            password: ""
        },
        errors: {},
    };

    schema = {
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().min(5).label("Password")
    };

    doSubmit = async () => {
        try {
          const { data } = this.state;
          await auth.login(data.email, data.password);
          window.location = "/";
        } catch (e) {
          if (e.response && e.response.status === 400) {
            toast.error(e.response.data.error);
          }
        }
      };

    render() {
        return (
            <AppWrapper>
                <SvgWrapper top="-110px" left="-140px">
                    <Ellipse/>
                </SvgWrapper>

                <SvgWrapper bottom="-80px" right="-70px">
                    <Dot/>
                </SvgWrapper>
                <AuthContainer>
                    <h1>Welcome to Abbasource Grocery Panel</h1>
                    <form onSubmit={this.handleSubmit}>
                     {this.renderInput("email", "Email")}
                     {this.renderInput("password", "Password", "password")}
                     {this.renderButton("Sign In")}
            </form>
                </AuthContainer>
            </AppWrapper>
        );
    }
}

export default RootScreen;