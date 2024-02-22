import React from 'react';

import WorkIcon from '@atlaskit/icon/glyph/folder';
import CustomerIcon from '@atlaskit/icon/glyph/person';
import QueueIcon from '@atlaskit/icon/glyph/queues';
import SettingsIcon from '@atlaskit/icon/glyph/settings';

import {
    LinkItem,
    NavigationFooter,
    NavigationHeader,
    NestableNavigationContent,
    Section,
    SideNavigation,
} from '@atlaskit/side-navigation';
import AppFrame from './AppFrame';
import SampleFooter from './ProjectFooter';
import ProjectHeader from './ProjectHeader';

const SideNav = () => {
    return (<AppFrame shouldHideAppBar>
        <SideNavigation label="project" testId="side-navigation">
            <NavigationHeader>
                <ProjectHeader/>
            </NavigationHeader>
            <NestableNavigationContent
                initialStack={[]}
                testId="nestable-navigation-content"
            >
                <Section isList>
                    <LinkItem iconBefore={<QueueIcon label=""/>}>
                        Dashboard
                    </LinkItem>
                    <LinkItem href="#" iconBefore={<SettingsIcon label=""/>}>
                        Settings
                    </LinkItem>
                    <LinkItem iconBefore={<WorkIcon label=""/>}>
                        Issue & Field sync
                    </LinkItem>
                    <LinkItem href="#" iconBefore={<CustomerIcon label=""/>}>
                        Automation
                    </LinkItem>
                </Section>
            </NestableNavigationContent>
            <NavigationFooter>
                <SampleFooter/>
            </NavigationFooter>
        </SideNavigation>
    </AppFrame>);
};

export default SideNav;
