import React from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Typography, Button, TextField, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";
import "../styles/signin.css";
import { loginUser } from "../redux/apiRequest";

const Signin = () => {
    const { googleSignIn, user } = UserAuth();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = { username, password };
        console.log("New User: ", newUser);
        loginUser(newUser, dispatch, navigate);
    };

    console.log({ username, password });
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            "aria-controls": `full-width-tabpanel-${index}`,
        };
    }
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="signin-page">
            <img
                className="logo-img"
                src="https://hcmuni.fpt.edu.vn/Data/Sites/1/media/logo_1.png"
            />
            <img
                className="pic-right"
                src="https://cdn.hita.com.vn/storage/blog/danh-muc-cu/truong-dai-hoc-dep-fpt.jpeg"
                alt="fpt"
            />
            <div className="sigin-right">
                <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "#22a19a" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="secondary tabs example"
                            variant="fullWidth"
                            style={{ color: "#22a19a" }}
                        >
                            <Tab
                                style={{
                                    marginRight: "20%",
                                    width: "25%",
                                    color: "#22a19a",
                                }}
                                label="Partner"
                                {...a11yProps(0)}
                            />
                            <Tab
                                style={{ width: "25%", color: "#22a19a" }}
                                label="Student & Staff"
                                {...a11yProps(1)}
                            />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <img
                            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/301630649_516498430281814_2662510924317735779_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3iymVtN4n9UAX_mi3qZ&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDqCdJ5EpsmPRD7IfFPvVVC1fBCZfrorxQj25K6oROfIA&oe=63D90891"
                            style={{ width: 240, height: 240 }}
                        />
                        <h3 style={{ color: "#22a19a", fontWeight: 700 }}>
                            Sign in
                        </h3>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ mt: 4 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                value={username}
                                type="text"
                                autoFocus
                                style={{
                                    width: "450px",
                                    height: "50px",
                                }}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                id="password"
                                value={password}
                                autoComplete="current-password"
                                style={{
                                    width: "450px",
                                    height: "50px",
                                }}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 4, mb: 14 }}
                                style={{
                                    backgroundColor: "#33b3aa",
                                    fontSize: "20px",
                                    width: "240px",
                                    height: "50px",
                                }}
                            >
                                Sign In
                            </Button>
                            <h4
                                style={{
                                    color: "#000",
                                    fontWeight: 700,
                                    fontSize: "24px",
                                }}
                            >
                                You can return{" "}
                                <a className="dashboard-link" href="/">
                                    Dashboard
                                </a>
                            </h4>
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <img
                            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/301630649_516498430281814_2662510924317735779_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3iymVtN4n9UAX_mi3qZ&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDqCdJ5EpsmPRD7IfFPvVVC1fBCZfrorxQj25K6oROfIA&oe=63D90891"
                            style={{ width: 240, height: 240 }}
                        />
                        <h3 style={{ color: "#22a19a", fontWeight: 700 }}>
                            Sign in
                        </h3>
                        <GoogleButton
                            className="btn-login"
                            onClick={handleGoogleSignIn}
                        />
                    </TabPanel>
                </Box>
            </div>
        </div>
    );
};

export default Signin;
