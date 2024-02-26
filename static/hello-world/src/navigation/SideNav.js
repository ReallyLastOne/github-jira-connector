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
import {useTranslation} from "react-i18next";

const SideNav = ({onPageChange}) => {
    const {t, i18n} = useTranslation();

    return (<AppFrame>
        <SideNavigation label="project" testId="side-navigation">
            <NavigationHeader>
                <ProjectHeader/>
            </NavigationHeader>
            <NestableNavigationContent
                initialStack={[]}
                testId="nestable-navigation-content"
            >
                <Section isList>
                    <LinkItem onClick={() => onPageChange('dashboard')} iconBefore={<QueueIcon label=""/>}>
                        {t("project.tabs.dashboard")}
                    </LinkItem>
                    <LinkItem onClick={() => onPageChange('settings')} iconBefore={<SettingsIcon label=""/>}>
                        {t("project.tabs.settings")}
                    </LinkItem>
                    <LinkItem onClick={() => onPageChange('issue')} iconBefore={<WorkIcon label=""/>}>
                        {t("project.tabs.issue")}
                    </LinkItem>
                    <LinkItem onClick={() => onPageChange('automation')} iconBefore={<CustomerIcon label=""/>}>
                        {t("project.tabs.automation")}
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
