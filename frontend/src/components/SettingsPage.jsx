import React from 'react';
import UserProfile from './Settings/UserProfile';
import NotificationPreferences from './Settings/NotificationPreferences';
import AccountManagement from './Settings/AccountManagement';
import PrivacySettings from './Settings/PrivacySettings';
import UserAuthentication from './Settings/UserAuthentication';
import { Link } from 'react-router-dom';

const SettingsPage = () => (
  <div className="p-8 w-full">
    <UserProfile />
    <NotificationPreferences />
    <AccountManagement />
    <PrivacySettings />
    <UserAuthentication />
  </div>
);

export default SettingsPage;
