/**
 * Defines a test data entry component.
 */

import React, { useRef } from "react";
import {
    Button,
    Card,
    CardContent,
    Container,
    TextField,
} from "@mui/material";
import { getDatabase, ref, set } from "firebase/database";
import app from "../firebase"

function TestEntry() {

    const rtdb = getDatabase(app);

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();

        set(ref(rtdb, 'users/' + emailRef.current.value), {
            email: emailRef.current.value,
            passwordRef: passwordRef.current.value
        });
    }

    return (
        <Container
        align="center"
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
        >
        <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
            <CardContent>
                <h2 className="text-center mt-4">Test Input</h2>
                <TextField
                required
                id="email"
                name="email"
                type="email"
                label="Email"
                variant="filled"
                inputRef={emailRef}
                fullWidth
                />
                <TextField
                required
                id="password"
                name="password"
                type="password"
                label="Password"
                variant="filled"
                inputRef={passwordRef}
                fullWidth
                />
                <Button
                className="w-100"
                type="submit"
                onClick={handleSubmit}
                >
                Send
                </Button>
            </CardContent>
            </Card>
        </div>
        </Container>
    );
}

export default TestEntry;
