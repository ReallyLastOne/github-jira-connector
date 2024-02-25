import {Fragment} from 'react';
import {LinkButton} from '@atlaskit/button/new';
import Icon from '@atlaskit/icon';
import {Footer} from '@atlaskit/side-navigation';
import SampleIcon from './ProjectIcon';
import {useTranslation} from "react-i18next";


const ProjectFooter = () => {
    const {t, i18n} = useTranslation();

    return (<Footer
        useDeprecatedApi={false}
        description={<Fragment>
            <LinkButton appearance="subtle-link" href="/feedback" spacing="none">
                {t("project.footer.feedback")}
            </LinkButton>
            {' ∙ '}
            <LinkButton appearance="subtle-link" href="/learn" spacing="none">
                {t("project.footer.learn")}
            </LinkButton>
        </Fragment>}
        iconBefore={<Icon label="mode" glyph={SampleIcon}/>}
    >
        {t("project.footer.description")}
        <a href="https://github.com/ReallyLastOne/github-jira-connector">github-jira-connector</a>
    </Footer>);
}


export default ProjectFooter;
