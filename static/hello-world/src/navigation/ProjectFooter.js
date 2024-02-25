import {Fragment} from 'react';
import {LinkButton} from '@atlaskit/button/new';
import Icon from '@atlaskit/icon';
import {Footer} from '@atlaskit/side-navigation';
import SampleIcon from './ProjectIcon';


const ProjectFooter = () => (
    <Footer
        useDeprecatedApi={false}
        description={
            <Fragment>
                <LinkButton appearance="subtle-link" href="/feedback" spacing="none">
                    Give feedback
                </LinkButton>
                {' ∙ '}
                <LinkButton appearance="subtle-link" href="/learn" spacing="none">
                    Learn more
                </LinkButton>
            </Fragment>
        }
        iconBefore={<Icon label="mode" glyph={SampleIcon}/>}
    >
        Source code at: <a href="https://github.com/ReallyLastOne/github-jira-connector">github-jira-connector</a>
    </Footer>
);

export default ProjectFooter;
