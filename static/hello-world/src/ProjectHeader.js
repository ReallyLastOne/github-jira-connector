import Icon from '@atlaskit/icon';

import {Header} from '@atlaskit/side-navigation';

import SampleIcon from './Logo';

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
    return (
        <Header
            component={Container}
            description="Integration made easy!"
            iconBefore={<Icon label="" glyph={SampleIcon} size="medium"/>}
        >
            GitHub &lt;&gt; Jira Connector
        </Header>
    );
};

export default ProjectHeader;
