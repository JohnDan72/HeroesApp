import React from "react";
import { Link } from "react-router-dom";



export const CustomNavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
        {children}
    </Link>
));