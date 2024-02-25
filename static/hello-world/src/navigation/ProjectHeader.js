import Icon from '@atlaskit/icon';

import {Header} from '@atlaskit/side-navigation';

import SampleIcon from './Logo';
import {useTranslation} from "react-i18next";

const Container = ({children, ...props}) => {
    return (
        <div
            {...props}
        >
            {children}
        </div>
    );
};

const ProjectHeader = () => {
    const {t, i18n} = useTranslation();

    return (
        <Header
            component={Container}
            description={t('project.header.description')}
            iconBefore={<Icon label="" glyph={SampleIcon} size="medium"/>}
        >
            GitHub &lt;&gt; Jira Connector
        </Header>
    );
};

export default ProjectHeader;
