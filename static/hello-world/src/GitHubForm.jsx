import React, {Fragment, useEffect, useState} from 'react';
import {invoke, showFlag} from '@forge/bridge';
import Button from "@atlaskit/button";
import Textfield from '@atlaskit/textfield';
import Form, {ErrorMessage, Field, FormFooter, ValidMessage} from '@atlaskit/form';
import {Box} from '@atlaskit/primitives';

const GitHubForm = () => {
    const [fieldValue, setFieldValue] = useState('');
    const [fieldHasError, setFieldHasError] = useState(false);
    const [isFieldNotFocused, setIsFieldNotFocused] = useState(false);
    const REGEXP_GITHUB_REPO_URI = /^https?:\/\/github\.com\/([\w\d-]+)\/([\w\d-]+)\/?$/;

    useEffect(() => {
        const fetchData = async () => {
            console.log("Getting repository URL");
            try {
                const projectKey = await invoke("getProjectKey");
                const url = await invoke('getProjectGithubURL', {key: projectKey});
                console.log("Got URL: " + url);
                // we expect that URL in storage is always valid
                setFieldHasError(false);
                setFieldValue(url);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    function validate(value) {
        const isValid = REGEXP_GITHUB_REPO_URI.test(value);
        setFieldHasError(!isValid);
        setFieldValue(value);
    }


    const handleSubmit = (formState) => {
        if (fieldHasError) return;
        invoke('saveProjectGithubURL', {url: fieldValue}).then(url => {
            showFlag({
                id: 1, title: "Successfully saved repository URL", description: "URL is now " + url, type: "success"
            })
        });
    };

    const handleBlurEvent = () => {
        setIsFieldNotFocused(true);
    };

    const handleFocusEvent = () => {
        setIsFieldNotFocused(false);
    };

    const errorAttributes = {};

    if (isFieldNotFocused) {
        errorAttributes['aria-relevant'] = 'all';
        errorAttributes['aria-atomic'] = 'false';
    }

    const generateErrorMessage = () => {
        if (fieldHasError) {
            return <Box as="span">Incorrect URL</Box>;
        }
    };


    return (<>
        <Form onSubmit={handleSubmit}>
            {({formProps}) => (
                <form {...formProps} name="validation-example">
                    <Field
                        label="Github repository URL"
                        isRequired
                        name="command"
                        validate={validate}
                    >
                        {({fieldProps, meta: {valid}}) => (
                            <Fragment>
                                <Textfield
                                    testId="formValidationTest"
                                    {...fieldProps}
                                    onBlur={handleBlurEvent}
                                    onFocus={handleFocusEvent}
                                    value={fieldValue}
                                />
                                {!fieldHasError && <ValidMessage>Your URL is valid</ValidMessage>}
                                {fieldHasError && (
                                    <ErrorMessage>
                                        <Box aria-live="polite" {...errorAttributes}>
                                            {generateErrorMessage()}
                                        </Box>
                                    </ErrorMessage>
                                )}
                            </Fragment>
                        )}
                    </Field>
                    <FormFooter>
                        <Button type="submit" appearance="primary">
                            Submit
                        </Button>
                    </FormFooter>
                </form>
            )}
        </Form>
    </>);
}
export default GitHubForm;
