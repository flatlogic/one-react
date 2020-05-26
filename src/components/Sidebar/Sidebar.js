import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { dismissAlert } from "../../actions/alerts";
import s from "./Sidebar.module.scss";
import LinksGroup from "./LinksGroup/LinksGroup";
import { changeActiveSidebarItem } from "../../actions/navigation";
import { logoutUser } from "../../actions/user";
import cx from "classnames";

// white sidebar
import lightDashboardIcon from "../../images/theme-icons/yellow/Dashboard_outlined.svg";
import darkDashboardIcon from "../../images/theme-icons/yellow/Dashboard_filled.svg";
import lightUI from "../../images/ui-elements.svg";
import darkUI from "../../images/ui-elements-dark.svg";
import logo from "../../images/logo.svg";
import settingsOutlined from "../../images/theme-icons/yellow/Settings_outlined.svg";
import settingsFilled from "../../images/theme-icons/yellow/Settings_outlined.svg";
import logoutIcon from "../../images/logout.svg";
import eCommerceOutlined from "../../images/theme-icons/yellow/E-commerce_outlined.svg";
import eCommerceFilled from "../../images/theme-icons/yellow/E-commerce_filled.svg";
import packageOutlined from "../../images/theme-icons/yellow/Package_outlined.svg";
import packageFilled from "../../images/theme-icons/yellow/Package_filled.svg";
import profileOutlined from "../../images/theme-icons/yellow/Profile_outlined.svg";
import profileFilled from "../../images/theme-icons/yellow/Profile_filled.svg";
import emailOutlined from "../../images/theme-icons/yellow/Email_outlined.svg";
import emailFilled from "../../images/theme-icons/yellow/Email_filled.svg";
import documentationOutlined from "../../images/theme-icons/yellow/Documentation_outlined.svg";
import documentationFilled from "../../images/theme-icons/yellow/Documentation_filled.svg";
import coreOutlined from "../../images/theme-icons/yellow/Core_outlined.svg";
import coreFilled from "../../images/theme-icons/yellow/Core_filled.svg";
import formsOutlined from "../../images/theme-icons/yellow/Forms_outlined.svg";
import formsFilled from "../../images/theme-icons/yellow/Forms_filled.svg";
import chartsOutlined from "../../images/theme-icons/yellow/Charts_outlined.svg";
import chartsFilled from "../../images/theme-icons/yellow/Charts_filled.svg";
import gridOutlined from "../../images/theme-icons/yellow/Grid_outlined.svg";
import gridFilled from "../../images/theme-icons/yellow/Grid_filled.svg";
import tablesOutlined from "../../images/theme-icons/yellow/Tables_outlined.svg";
import tablesFilled from "../../images/theme-icons/yellow/Tables_filled.svg";
import mapsOutlined from "../../images/theme-icons/yellow/Maps_outlined.svg";
import mapsFilled from "../../images/theme-icons/yellow/Maps_filled.svg";
import extraOutlined from "../../images/light-extra.svg";
import extraFilled from "../../images/dark-extra.svg";

// danger
import lightDashboardIconDanger from "../../images/theme-icons/red/Dashboard_outlined.svg";
import darkDashboardIconDanger from "../../images/theme-icons/red/Dashboard_filled.svg";
import lightUIDanger from "../../images/theme-icons/red/ui elements_outlined.svg";
import darkUIDanger from "../../images/theme-icons/red/ui elements_filled.svg";
import logoDanger from "../../images/theme-icons/red/Logo.svg";
import settingsOutlinedDanger from "../../images/theme-icons/red/Settings_outlined.svg";
import settingsFilledDanger from "../../images/theme-icons/red/Settings_outlined.svg";
import logoutIconDanger from "../../images/logout.svg";
import eCommerceOutlinedDanger from "../../images/theme-icons/red/E-commerce_outlined.svg";
import eCommerceFilledDanger from "../../images/theme-icons/red/E-commerce_filled.svg";
import packageOutlinedDanger from "../../images/theme-icons/red/Package_outlined.svg";
import packageFilledDanger from "../../images/theme-icons/red/Package_filled.svg";
import profileOutlinedDanger from "../../images/theme-icons/red/Profile_outlined.svg";
import profileFilledDanger from "../../images/theme-icons/red/Profile_filled.svg";
import emailOutlinedDanger from "../../images/theme-icons/red/Email_outlined.svg";
import emailFilledDanger from "../../images/theme-icons/red/Email_filled.svg";
import documentationOutlinedDanger from "../../images/theme-icons/red/Documentation_outlined.svg";
import documentationFilledDanger from "../../images/theme-icons/red/Documentation_filled.svg";
import coreOutlinedDanger from "../../images/theme-icons/red/Core_outlined.svg";
import coreFilledDanger from "../../images/theme-icons/red/Core_filled.svg";
import formsOutlinedDanger from "../../images/theme-icons/red/Forms_outlined.svg";
import formsFilledDanger from "../../images/theme-icons/red/Forms_filled.svg";
import chartsOutlinedDanger from "../../images/theme-icons/red/Charts_outlined.svg";
import chartsFilledDanger from "../../images/theme-icons/red/Charts_filled.svg";
import gridOutlinedDanger from "../../images/theme-icons/red/Grid_outlined.svg";
import gridFilledDanger from "../../images/theme-icons/red/Grid_filled.svg";
import tablesOutlinedDanger from "../../images/theme-icons/red/Tables_outlined.svg";
import tablesFilledDanger from "../../images/theme-icons/red/Tables_filled.svg";
import mapsOutlinedDanger from "../../images/theme-icons/red/Maps_outlined.svg";
import mapsFilledDanger from "../../images/theme-icons/red/Maps_filled.svg";
import extraOutlinedDanger from "../../images/light-extra.svg";
import extraFilledDanger from "../../images/dark-extra.svg";

// success
import lightDashboardIconSuccess from "../../images/theme-icons/green/Dashboard_outlined.svg";
import darkDashboardIconSuccess from "../../images/theme-icons/green/Dashboard_filled.svg";
import lightUISuccess from "../../images/theme-icons/green/ui elements_outlined.svg";
import darkUISuccess from "../../images/theme-icons/green/ui elements_filled.svg";
import logoSuccess from "../../images/theme-icons/green/Logo.svg";
import settingsOutlinedSuccess from "../../images/theme-icons/green/Settings_outlined.svg";
import settingsFilledSuccess from "../../images/theme-icons/green/Settings_outlined.svg";
import logoutIconSuccess from "../../images/logout.svg";
import eCommerceOutlinedSuccess from "../../images/theme-icons/green/E-commerce_outlined.svg";
import eCommerceFilledSuccess from "../../images/theme-icons/green/E-commerce_filled.svg";
import packageOutlinedSuccess from "../../images/theme-icons/green/Package_outlined.svg";
import packageFilledSuccess from "../../images/theme-icons/green/Package_filled.svg";
import profileOutlinedSuccess from "../../images/theme-icons/green/Profile_outlined.svg";
import profileFilledSuccess from "../../images/theme-icons/green/Profile_filled.svg";
import emailOutlinedSuccess from "../../images/theme-icons/green/Email_outlined.svg";
import emailFilledSuccess from "../../images/theme-icons/green/Email_filled.svg";
import documentationOutlinedSuccess from "../../images/theme-icons/green/Documentation_outlined.svg";
import documentationFilledSuccess from "../../images/theme-icons/green/Documentation_filled.svg";
import coreOutlinedSuccess from "../../images/theme-icons/green/Core_outlined.svg";
import coreFilledSuccess from "../../images/theme-icons/green/Core_filled.svg";
import formsOutlinedSuccess from "../../images/theme-icons/green/Forms_outlined.svg";
import formsFilledSuccess from "../../images/theme-icons/green/Forms_filled.svg";
import chartsOutlinedSuccess from "../../images/theme-icons/green/Charts_outlined.svg";
import chartsFilledSuccess from "../../images/theme-icons/green/Charts_filled.svg";
import gridOutlinedSuccess from "../../images/theme-icons/green/Grid_outlined.svg";
import gridFilledSuccess from "../../images/theme-icons/green/Grid_filled.svg";
import tablesOutlinedSuccess from "../../images/theme-icons/green/Tables_outlined.svg";
import tablesFilledSuccess from "../../images/theme-icons/green/Tables_filled.svg";
import mapsOutlinedSuccess from "../../images/theme-icons/green/Maps_outlined.svg";
import mapsFilledSuccess from "../../images/theme-icons/green/Maps_filled.svg";
import extraOutlinedSuccess from "../../images/light-extra.svg";
import extraFilledSuccess from "../../images/dark-extra.svg";

// info
import lightDashboardIconBlue from "../../images/theme-icons/blue/Dashboard_outlined.svg";
import darkDashboardIconBlue from "../../images/theme-icons/blue/Dashboard_filled.svg";
import lightUIBlue from "../../images/theme-icons/blue/ui elements_outlined.svg";
import darkUIBlue from "../../images/theme-icons/blue/ui elements_filled.svg";
import logoBlue from "../../images/theme-icons/blue/Logo.svg";
import settingsOutlinedBlue from "../../images/theme-icons/blue/Settings_outlined.svg";
import settingsFilledBlue from "../../images/theme-icons/blue/Settings_outlined.svg";
import logoutIconBlue from "../../images/logout.svg";
import eCommerceOutlinedBlue from "../../images/theme-icons/blue/E-commerce_outlined.svg";
import eCommerceFilledBlue from "../../images/theme-icons/blue/E-commerce_filled.svg";
import packageOutlinedBlue from "../../images/theme-icons/blue/Package_outlined.svg";
import packageFilledBlue from "../../images/theme-icons/blue/Package_filled.svg";
import profileOutlinedBlue from "../../images/theme-icons/blue/Profile_outlined.svg";
import profileFilledBlue from "../../images/theme-icons/blue/Profile_filled.svg";
import emailOutlinedBlue from "../../images/theme-icons/blue/Email_outlined.svg";
import emailFilledBlue from "../../images/theme-icons/blue/Email_filled.svg";
import documentationOutlinedBlue from "../../images/theme-icons/blue/Documentation_outlined.svg";
import documentationFilledBlue from "../../images/theme-icons/blue/Documentation_filled.svg";
import coreOutlinedBlue from "../../images/theme-icons/blue/Core_outlined.svg";
import coreFilledBlue from "../../images/theme-icons/blue/Core_filled.svg";
import formsOutlinedBlue from "../../images/theme-icons/blue/Forms_outlined.svg";
import formsFilledBlue from "../../images/theme-icons/blue/Forms_filled.svg";
import chartsOutlinedBlue from "../../images/theme-icons/blue/Charts_outlined.svg";
import chartsFilledBlue from "../../images/theme-icons/blue/Charts_filled.svg";
import gridOutlinedBlue from "../../images/theme-icons/blue/Grid_outlined.svg";
import gridFilledBlue from "../../images/theme-icons/blue/Grid_filled.svg";
import tablesOutlinedBlue from "../../images/theme-icons/blue/Tables_outlined.svg";
import tablesFilledBlue from "../../images/theme-icons/blue/Tables_filled.svg";
import mapsOutlinedBlue from "../../images/theme-icons/blue/Maps_outlined.svg";
import mapsFilledBlue from "../../images/theme-icons/blue/Maps_filled.svg";
import extraOutlinedBlue from "../../images/light-extra.svg";
import extraFilledBlue from "../../images/dark-extra.svg";

//dark sidebar
import darkSidebarDashboardOutlined from '../../images/theme-icons/dark sidebar/yellow/Dashboard_outlined.svg'
import darkSidebarDashboardFilled from '../../images/theme-icons/dark sidebar/yellow/Dashboard_filled.svg'
import darkSidebarTablesOutlined from '../../images/theme-icons/dark sidebar/yellow/Tables_outlined.svg'
import darkSidebarTablesFilled from '../../images/theme-icons/dark sidebar/yellow/Tables_filled.svg'
import darkSidebarUIOutlined from '../../images/theme-icons/dark sidebar/yellow/ui elements_outlined.svg'
import darkSidebarUIFilled from '../../images/theme-icons/dark sidebar/yellow/ui elements_filled.svg'
import darkSidebarSettingsOutlined from '../../images/theme-icons/dark sidebar/yellow/Settings_outlined.svg'
import darkSidebarSettingsFilled from '../../images/theme-icons/dark sidebar/yellow/Settings_filled.svg'
import darkSidebarLogout from '../../images/theme-icons/dark sidebar/yellow/Logout_outlined.svg'
import darkSidebarAccountOutlined from '../../images/theme-icons/dark sidebar/yellow/Profile_outlined.svg'
import darkSidebarAccountFilled from '../../images/theme-icons/dark sidebar/yellow/Profile_filled.svg'
import darkSidebarEccomerceOutlined from '../../images/theme-icons/dark sidebar/yellow/E-commerce_outlined.svg'
import darkSidebarEccomerceFilled from '../../images/theme-icons/dark sidebar/yellow/E-commerce_filled.svg'
import darkSidebarPackageOutlined from '../../images/theme-icons/dark sidebar/yellow/Package_outlined.svg'
import darkSidebarPackageFilled from '../../images/theme-icons/dark sidebar/yellow/Package_filled.svg'
import darkSidebarEmailOutlined from '../../images/theme-icons/dark sidebar/yellow/Email_outlined.svg'
import darkSidebarEmailFilled from '../../images/theme-icons/dark sidebar/yellow/Email_filled.svg'
import darkSidebarDocumentationOutlined from '../../images/theme-icons/dark sidebar/yellow/Documentation_outlined.svg'
import darkSidebarDocumentationFilled from '../../images/theme-icons/dark sidebar/yellow/Documentation_filled.svg'
import darkSidebarCoreOutlined from '../../images/theme-icons/dark sidebar/yellow/Core_outlined.svg'
import darkSidebarCoreFilled from '../../images/theme-icons/dark sidebar/yellow/Core_filled.svg'
import darkSidebarFormsOutlined from '../../images/theme-icons/dark sidebar/yellow/Forms_outlined.svg'
import darkSidebarFormsFilled from '../../images/theme-icons/dark sidebar/yellow/Forms_filled.svg'
import darkSidebarChartsOutlined from '../../images/theme-icons/dark sidebar/yellow/Charts_outlined.svg'
import darkSidebarChartsFilled from '../../images/theme-icons/dark sidebar/yellow/Charts_filled.svg'
import darkSidebarGridOutlined from '../../images/theme-icons/dark sidebar/yellow/Grid_outlined.svg'
import darkSidebarGridFilled from '../../images/theme-icons/dark sidebar/yellow/Grid_filled.svg'
import darkSidebarMapsOutlined from '../../images/theme-icons/dark sidebar/yellow/Maps_outlined.svg'
import darkSidebarMapsFilled from '../../images/theme-icons/dark sidebar/yellow/Maps_filled.svg'
import darkSidebarExtraOutlined from '../../images/theme-icons/dark sidebar/yellow/Extra_outlined.svg'
import darkSidebarExtraFilled from '../../images/theme-icons/dark sidebar/yellow/Extra_filled.svg'

//dark sidebar danger
import darkSidebarDashboardOutlinedDanger from '../../images/theme-icons/dark sidebar/red/Dashboard_outlined.svg'
import darkSidebarDashboardFilledDanger from '../../images/theme-icons/dark sidebar/red/Dashboard_filled.svg'
import darkSidebarTablesOutlinedDanger from '../../images/theme-icons/dark sidebar/red/Tables_outlined.svg'
import darkSidebarTablesFilledDanger from '../../images/theme-icons/dark sidebar/red/Tables_filled.svg'
import darkSidebarUIOutlinedDanger from '../../images/theme-icons/dark sidebar/red/ui elements_outlined.svg'
import darkSidebarUIFilledDanger from '../../images/theme-icons/dark sidebar/red/ui elements_filled.svg'
import darkSidebarSettingsOutlinedDanger from '../../images/theme-icons/dark sidebar/red/Settings_outlined.svg'
import darkSidebarSettingsFilledDanger from '../../images/theme-icons/dark sidebar/red/Settings_filled.svg'
import darkSidebarLogoutDanger from '../../images/theme-icons/dark sidebar/red/Logout_outlined.svg'
import darkSidebarAccountOutlinedDanger from '../../images/theme-icons/dark sidebar/red/Profile_outlined.svg'
import darkSidebarAccountFilledDanger from '../../images/theme-icons/dark sidebar/red/Profile_filled.svg'
import darkSidebarEccomerceOutlinedDanger from '../../images/theme-icons/dark sidebar/red/E-commerce_outlined.svg'
import darkSidebarEccomerceFilledDanger from '../../images/theme-icons/dark sidebar/red/E-commerce_filled.svg'
import darkSidebarPackageOutlinedDanger from '../../images/theme-icons/dark sidebar/red/Package_outlined.svg'
import darkSidebarPackageFilledDanger from '../../images/theme-icons/dark sidebar/red/Package_filled.svg'
import darkSidebarEmailOutlinedDanger from '../../images/theme-icons/dark sidebar/red/Email_outlined.svg'
import darkSidebarEmailFilledDanger from '../../images/theme-icons/dark sidebar/red/Email_filled.svg'
import darkSidebarDocumentationOutlinedDanger from '../../images/theme-icons/dark sidebar/red/Documentation_outlined.svg'
import darkSidebarDocumentationFilledDanger from '../../images/theme-icons/dark sidebar/red/Documentation_filled.svg'
import darkSidebarCoreOutlinedDanger from '../../images/theme-icons/dark sidebar/red/Core_outlined.svg'
import darkSidebarCoreFilledDanger from '../../images/theme-icons/dark sidebar/red/Core_filled.svg'
import darkSidebarFormsOutlinedDanger from '../../images/theme-icons/dark sidebar/red/Forms_outlined.svg'
import darkSidebarFormsFilledDanger from '../../images/theme-icons/dark sidebar/red/Forms_filled.svg'
import darkSidebarChartsOutlinedDanger from '../../images/theme-icons/dark sidebar/red/Charts_outlined.svg'
import darkSidebarChartsFilledDanger from '../../images/theme-icons/dark sidebar/red/Charts_filled.svg'
import darkSidebarGridOutlinedDanger from '../../images/theme-icons/dark sidebar/red/Grid_outlined.svg'
import darkSidebarGridFilledDanger from '../../images/theme-icons/dark sidebar/red/Grid_filled.svg'
import darkSidebarMapsOutlinedDanger from '../../images/theme-icons/dark sidebar/red/Maps_outlined.svg'
import darkSidebarMapsFilledDanger from '../../images/theme-icons/dark sidebar/red/Maps_filled.svg'
import darkSidebarExtraOutlinedDanger from '../../images/theme-icons/dark sidebar/red/Extra_outlined.svg'
import darkSidebarExtraFilledDanger from '../../images/theme-icons/dark sidebar/red/Extra_filled.svg'

//dark sidebar success
import darkSidebarDashboardOutlinedSuccess from '../../images/theme-icons/dark sidebar/green/Dashboard_outlined.svg'
import darkSidebarDashboardFilledSuccess from '../../images/theme-icons/dark sidebar/green/Dashboard_filled.svg'
import darkSidebarTablesOutlinedSuccess from '../../images/theme-icons/dark sidebar/green/Tables_outlined.svg'
import darkSidebarTablesFilledSuccess from '../../images/theme-icons/dark sidebar/green/Tables_filled.svg'
import darkSidebarUIOutlinedSuccess from '../../images/theme-icons/dark sidebar/green/ui elements_outlined.svg'
import darkSidebarUIFilledSuccess from '../../images/theme-icons/dark sidebar/green/ui elements_filled.svg'
import darkSidebarSettingsOutlinedSuccess from '../../images/theme-icons/dark sidebar/green/Settings_outlined.svg'
import darkSidebarSettingsFilledSuccess from '../../images/theme-icons/dark sidebar/green/Settings_filled.svg'
import darkSidebarLogoutSuccess from '../../images/theme-icons/dark sidebar/green/Logout_outlined.svg'
import darkSidebarAccountOutlinedSuccess from '../../images/theme-icons/dark sidebar/green/Profile_outlined.svg'
import darkSidebarAccountFilledSuccess from '../../images/theme-icons/dark sidebar/green/Profile_filled.svg'
import darkSidebarEccomerceOutlinedSuccess from '../../images/theme-icons/dark sidebar/green/E-commerce_outlined.svg'
import darkSidebarEccomerceFilledSuccess from '../../images/theme-icons/dark sidebar/green/E-commerce_filled.svg'
import darkSidebarPackageOutlinedSuccess from '../../images/theme-icons/dark sidebar/green/Package_outlined.svg'
import darkSidebarPackageFilledSuccess from '../../images/theme-icons/dark sidebar/green/Package_filled.svg'
import darkSidebarEmailOutlinedSuccess from '../../images/theme-icons/dark sidebar/green/Email_outlined.svg'
import darkSidebarEmailFilledSuccess from '../../images/theme-icons/dark sidebar/green/Email_filled.svg'
import darkSidebarDocumentationOutlinedSuccess from '../../images/theme-icons/dark sidebar/green/Documentation_outlined.svg'
import darkSidebarDocumentationFilledSuccess from '../../images/theme-icons/dark sidebar/green/Documentation_filled.svg'
import darkSidebarCoreOutlinedSuccess from '../../images/theme-icons/dark sidebar/green/Core_outlined.svg'
import darkSidebarCoreFilledSuccess from '../../images/theme-icons/dark sidebar/green/Core_filled.svg'
import darkSidebarFormsOutlinedSuccess from '../../images/theme-icons/dark sidebar/green/Forms_outlined.svg'
import darkSidebarFormsFilledSuccess from '../../images/theme-icons/dark sidebar/green/Forms_filled.svg'
import darkSidebarChartsOutlinedSuccess from '../../images/theme-icons/dark sidebar/green/Charts_outlined.svg'
import darkSidebarChartsFilledSuccess from '../../images/theme-icons/dark sidebar/green/Charts_filled.svg'
import darkSidebarGridOutlinedSuccess from '../../images/theme-icons/dark sidebar/green/Grid_outlined.svg'
import darkSidebarGridFilledSuccess from '../../images/theme-icons/dark sidebar/green/Grid_filled.svg'
import darkSidebarMapsOutlinedSuccess from '../../images/theme-icons/dark sidebar/green/Maps_outlined.svg'
import darkSidebarMapsFilledSuccess from '../../images/theme-icons/dark sidebar/green/Maps_filled.svg'
import darkSidebarExtraOutlinedSuccess from '../../images/theme-icons/dark sidebar/green/Extra_outlined.svg'
import darkSidebarExtraFilledSuccess from '../../images/theme-icons/dark sidebar/green/Extra_filled.svg'

//dark sidebar info
import darkSidebarDashboardOutlinedBlue from '../../images/theme-icons/dark sidebar/blue/Dashboard_outlined.svg'
import darkSidebarDashboardFilledBlue from '../../images/theme-icons/dark sidebar/blue/Dashboard_filled.svg'
import darkSidebarTablesOutlinedBlue from '../../images/theme-icons/dark sidebar/blue/Tables_outlined.svg'
import darkSidebarTablesFilledBlue from '../../images/theme-icons/dark sidebar/blue/Tables_filled.svg'
import darkSidebarUIOutlinedBlue from '../../images/theme-icons/dark sidebar/blue/ui elements_outlined.svg'
import darkSidebarUIFilledBlue from '../../images/theme-icons/dark sidebar/blue/ui elements_filled.svg'
import darkSidebarSettingsOutlinedBlue from '../../images/theme-icons/dark sidebar/blue/Settings_outlined.svg'
import darkSidebarSettingsFilledBlue from '../../images/theme-icons/dark sidebar/blue/Settings_filled.svg'
import darkSidebarLogoutBlue from '../../images/theme-icons/dark sidebar/blue/Logout_outlined.svg'
import darkSidebarAccountOutlinedBlue from '../../images/theme-icons/dark sidebar/blue/Profile_outlined.svg'
import darkSidebarAccountFilledBlue from '../../images/theme-icons/dark sidebar/blue/Profile_filled.svg'
import darkSidebarEccomerceOutlinedBlue from '../../images/theme-icons/dark sidebar/blue/E-commerce_outlined.svg'
import darkSidebarEccomerceFilledBlue from '../../images/theme-icons/dark sidebar/blue/E-commerce_filled.svg'
import darkSidebarPackageOutlinedBlue from '../../images/theme-icons/dark sidebar/blue/Package_outlined.svg'
import darkSidebarPackageFilledBlue from '../../images/theme-icons/dark sidebar/blue/Package_filled.svg'
import darkSidebarEmailOutlinedBlue from '../../images/theme-icons/dark sidebar/blue/Email_outlined.svg'
import darkSidebarEmailFilledBlue from '../../images/theme-icons/dark sidebar/blue/Email_filled.svg'
import darkSidebarDocumentationOutlinedBlue from '../../images/theme-icons/dark sidebar/blue/Documentation_outlined.svg'
import darkSidebarDocumentationFilledBlue from '../../images/theme-icons/dark sidebar/blue/Documentation_filled.svg'
import darkSidebarCoreOutlinedBlue from '../../images/theme-icons/dark sidebar/blue/Core_outlined.svg'
import darkSidebarCoreFilledBlue from '../../images/theme-icons/dark sidebar/blue/Core_filled.svg'
import darkSidebarFormsOutlinedBlue from '../../images/theme-icons/dark sidebar/blue/Forms_outlined.svg'
import darkSidebarFormsFilledBlue from '../../images/theme-icons/dark sidebar/blue/Forms_filled.svg'
import darkSidebarChartsOutlinedBlue from '../../images/theme-icons/dark sidebar/blue/Charts_outlined.svg'
import darkSidebarChartsFilledBlue from '../../images/theme-icons/dark sidebar/blue/Charts_filled.svg'
import darkSidebarGridOutlinedBlue from '../../images/theme-icons/dark sidebar/blue/Grid_outlined.svg'
import darkSidebarGridFilledBlue from '../../images/theme-icons/dark sidebar/blue/Grid_filled.svg'
import darkSidebarMapsOutlinedBlue from '../../images/theme-icons/dark sidebar/blue/Maps_outlined.svg'
import darkSidebarMapsFilledBlue from '../../images/theme-icons/dark sidebar/blue/Maps_filled.svg'
import darkSidebarExtraOutlinedBlue from '../../images/theme-icons/dark sidebar/blue/Extra_outlined.svg'
import darkSidebarExtraFilledBlue from '../../images/theme-icons/dark sidebar/blue/Extra_filled.svg'


class Sidebar extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    activeItem: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    sidebarStatic: true,
    sidebarOpened: true,
    activeItem: "",
  };

  constructor(props) {
    super(props);

    this.doLogout = this.doLogout.bind(this);
    this.themeIcons = this.themeIcons.bind(this);
  }

  dismissAlert(id) {
    this.props.dispatch(dismissAlert(id));
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  themeIcons(currentPage) {
    const sidebarColor = this.props.sidebarColor;
    if (sidebarColor === 'dark') {
      switch(this.props.themeColor) {
        case 'warning':
          switch (currentPage) {
            case "dashboard":
              return window.location.href.includes(currentPage) ? darkSidebarDashboardFilled : darkSidebarDashboardOutlined
            case "eccomerce":
              return window.location.href.includes(currentPage) ? darkSidebarEccomerceFilled : darkSidebarEccomerceOutlined
            case "package":
              return window.location.href.includes(currentPage) ? darkSidebarPackageFilled : darkSidebarPackageOutlined
            case "profile":
              return window.location.href.includes(currentPage) ? darkSidebarAccountFilled : darkSidebarAccountOutlined
            case "settings":
              return window.location.href.includes(currentPage) ? darkSidebarSettingsFilled : darkSidebarSettingsOutlined
            case "logout":
              return darkSidebarLogout
            case "email":
              return window.location.href.includes(currentPage) ? darkSidebarEmailFilled : darkSidebarEmailOutlined
            case "documentation":
              return window.location.href.includes(currentPage) ? darkSidebarDocumentationFilled : darkSidebarDocumentationOutlined
            case "core":
              return window.location.href.includes(currentPage) ? darkSidebarCoreFilled : darkSidebarCoreOutlined
            case "ui":
              return window.location.href.includes(currentPage) ? darkSidebarUIFilled : darkSidebarUIOutlined
            case "forms":
              return window.location.href.includes(currentPage) ? darkSidebarFormsFilled : darkSidebarFormsOutlined
            case "charts":
              return window.location.href.includes(currentPage) ? darkSidebarChartsFilled : darkSidebarChartsOutlined
            case "grid":
              return window.location.href.includes(currentPage) ? darkSidebarGridFilled : darkSidebarGridOutlined
            case "tables":
              return window.location.href.includes(currentPage) ? darkSidebarTablesFilled : darkSidebarTablesOutlined
            case "maps":
              return window.location.href.includes(currentPage) ? darkSidebarMapsFilled : darkSidebarMapsOutlined
            case "extra":
              return window.location.href.includes(currentPage) ? darkSidebarExtraFilled : darkSidebarExtraOutlined
          }
        case 'danger':
          switch (currentPage) {
            case "dashboard":
              return window.location.href.includes(currentPage) ? darkSidebarDashboardFilledDanger : darkSidebarDashboardOutlinedDanger
            case "eccomerce":
              return window.location.href.includes(currentPage) ? darkSidebarEccomerceFilledDanger : darkSidebarEccomerceOutlinedDanger
            case "package":
              return window.location.href.includes(currentPage) ? darkSidebarPackageFilledDanger : darkSidebarPackageOutlinedDanger
            case "profile":
              return window.location.href.includes(currentPage) ? darkSidebarAccountFilledDanger : darkSidebarAccountOutlinedDanger
            case "settings":
              return window.location.href.includes(currentPage) ? darkSidebarSettingsFilledDanger : darkSidebarSettingsOutlinedDanger
            case "logout":
              return darkSidebarLogout
            case "email":
              return window.location.href.includes(currentPage) ? darkSidebarEmailFilledDanger : darkSidebarEmailOutlinedDanger
            case "documentation":
              return window.location.href.includes(currentPage) ? darkSidebarDocumentationFilledDanger : darkSidebarDocumentationOutlinedDanger
            case "core":
              return window.location.href.includes(currentPage) ? darkSidebarCoreFilledDanger : darkSidebarCoreOutlinedDanger
            case "ui":
              return window.location.href.includes(currentPage) ? darkSidebarUIFilledDanger : darkSidebarUIOutlinedDanger
            case "forms":
              return window.location.href.includes(currentPage) ? darkSidebarFormsFilledDanger : darkSidebarFormsOutlinedDanger
            case "charts":
              return window.location.href.includes(currentPage) ? darkSidebarChartsFilledDanger : darkSidebarChartsOutlinedDanger
            case "grid":
              return window.location.href.includes(currentPage) ? darkSidebarGridFilledDanger : darkSidebarGridOutlinedDanger
            case "tables":
              return window.location.href.includes(currentPage) ? darkSidebarTablesFilledDanger : darkSidebarTablesOutlinedDanger
            case "maps":
              return window.location.href.includes(currentPage) ? darkSidebarMapsFilledDanger : darkSidebarMapsOutlinedDanger
            case "extra":
              return window.location.href.includes(currentPage) ? darkSidebarExtraFilledDanger : darkSidebarExtraOutlinedDanger
          }
        case 'success':
          switch (currentPage) {
            case "dashboard":
              return window.location.href.includes(currentPage) ? darkSidebarDashboardFilledSuccess : darkSidebarDashboardOutlinedSuccess
            case "eccomerce":
              return window.location.href.includes(currentPage) ? darkSidebarEccomerceFilledSuccess : darkSidebarEccomerceOutlinedSuccess
            case "package":
              return window.location.href.includes(currentPage) ? darkSidebarPackageFilledSuccess : darkSidebarPackageOutlinedSuccess
            case "profile":
              return window.location.href.includes(currentPage) ? darkSidebarAccountFilledSuccess : darkSidebarAccountOutlinedSuccess
            case "settings":
              return window.location.href.includes(currentPage) ? darkSidebarSettingsFilledSuccess : darkSidebarSettingsOutlinedSuccess
            case "logout":
              return darkSidebarLogout
            case "email":
              return window.location.href.includes(currentPage) ? darkSidebarEmailFilledSuccess : darkSidebarEmailOutlinedSuccess
            case "documentation":
              return window.location.href.includes(currentPage) ? darkSidebarDocumentationFilledSuccess : darkSidebarDocumentationOutlinedSuccess
            case "core":
              return window.location.href.includes(currentPage) ? darkSidebarCoreFilledSuccess : darkSidebarCoreOutlinedSuccess
            case "ui":
              return window.location.href.includes(currentPage) ? darkSidebarUIFilledSuccess : darkSidebarUIOutlinedSuccess
            case "forms":
              return window.location.href.includes(currentPage) ? darkSidebarFormsFilledSuccess : darkSidebarFormsOutlinedSuccess
            case "charts":
              return window.location.href.includes(currentPage) ? darkSidebarChartsFilledSuccess : darkSidebarChartsOutlinedSuccess
            case "grid":
              return window.location.href.includes(currentPage) ? darkSidebarGridFilledSuccess : darkSidebarGridOutlinedSuccess
            case "tables":
              return window.location.href.includes(currentPage) ? darkSidebarTablesFilledSuccess : darkSidebarTablesOutlinedSuccess
            case "maps":
              return window.location.href.includes(currentPage) ? darkSidebarMapsFilledSuccess : darkSidebarMapsOutlinedSuccess
            case "extra":
              return window.location.href.includes(currentPage) ? darkSidebarExtraFilledSuccess : darkSidebarExtraOutlinedSuccess
          }
        case 'info':
          switch (currentPage) {
            case "dashboard":
              return window.location.href.includes(currentPage) ? darkSidebarDashboardFilledBlue : darkSidebarDashboardOutlinedBlue
            case "eccomerce":
              return window.location.href.includes(currentPage) ? darkSidebarEccomerceFilledBlue : darkSidebarEccomerceOutlinedBlue
            case "package":
              return window.location.href.includes(currentPage) ? darkSidebarPackageFilledBlue : darkSidebarPackageOutlinedBlue
            case "profile":
              return window.location.href.includes(currentPage) ? darkSidebarAccountFilledBlue : darkSidebarAccountOutlinedBlue
            case "settings":
              return window.location.href.includes(currentPage) ? darkSidebarSettingsFilledBlue : darkSidebarSettingsOutlinedBlue
            case "logout":
              return darkSidebarLogout
            case "email":
              return window.location.href.includes(currentPage) ? darkSidebarEmailFilledBlue : darkSidebarEmailOutlinedBlue
            case "documentation":
              return window.location.href.includes(currentPage) ? darkSidebarDocumentationFilledBlue : darkSidebarDocumentationOutlinedBlue
            case "core":
              return window.location.href.includes(currentPage) ? darkSidebarCoreFilledBlue : darkSidebarCoreOutlinedBlue
            case "ui":
              return window.location.href.includes(currentPage) ? darkSidebarUIFilledBlue : darkSidebarUIOutlinedBlue
            case "forms":
              return window.location.href.includes(currentPage) ? darkSidebarFormsFilledBlue : darkSidebarFormsOutlinedBlue
            case "charts":
              return window.location.href.includes(currentPage) ? darkSidebarChartsFilledBlue : darkSidebarChartsOutlinedBlue
            case "grid":
              return window.location.href.includes(currentPage) ? darkSidebarGridFilledBlue : darkSidebarGridOutlinedBlue
            case "tables":
              return window.location.href.includes(currentPage) ? darkSidebarTablesFilledBlue : darkSidebarTablesOutlinedBlue
            case "maps":
              return window.location.href.includes(currentPage) ? darkSidebarMapsFilledBlue : darkSidebarMapsOutlinedBlue
            case "extra":
              return window.location.href.includes(currentPage) ? darkSidebarExtraFilledBlue : darkSidebarExtraOutlinedBlue
          }
      }
    }
    switch(this.props.themeColor) {
      case 'warning':
        switch (currentPage) {
          case "dashboard":
            return window.location.href.includes(currentPage) ? darkDashboardIcon : lightDashboardIcon
          case "eccomerce":
            return window.location.href.includes(currentPage) ? eCommerceFilled : eCommerceOutlined
          case "package":
            return window.location.href.includes(currentPage) ? packageFilled : packageOutlined
          case "profile":
            return window.location.href.includes(currentPage) ? profileFilled : profileOutlined
          case "settings":
            return window.location.href.includes(currentPage) ? settingsFilled : settingsOutlined
          case "logout":
            return logoutIcon
          case "email":
            return window.location.href.includes(currentPage) ? emailFilled : emailOutlined
          case "documentation":
            return window.location.href.includes(currentPage) ? documentationFilled : documentationOutlined
          case "core":
            return window.location.href.includes(currentPage) ? coreFilled : coreOutlined
          case "ui":
            return window.location.href.includes(currentPage) ? darkUI : lightUI
          case "forms":
            return window.location.href.includes(currentPage) ? formsFilled : formsOutlined
          case "charts":
            return window.location.href.includes(currentPage) ? chartsFilled : chartsOutlined
          case "grid":
            return window.location.href.includes(currentPage) ? gridFilled : gridOutlined
          case "tables":
            return window.location.href.includes(currentPage) ? tablesFilled : tablesOutlined
          case "maps":
            return window.location.href.includes(currentPage) ? mapsFilled : mapsOutlined
          case "extra":
            return window.location.href.includes(currentPage) ? extraFilled : extraOutlined
        }
      case 'danger':
        switch (currentPage) {
          case "dashboard":
            return window.location.href.includes(currentPage) ? darkDashboardIconDanger : lightDashboardIconDanger
          case "eccomerce":
            return window.location.href.includes(currentPage) ? eCommerceFilledDanger : eCommerceOutlinedDanger
          case "package":
            return window.location.href.includes(currentPage) ? packageFilledDanger : packageOutlinedDanger
          case "profile":
            return window.location.href.includes(currentPage) ? profileFilledDanger : profileOutlinedDanger
          case "settings":
            return window.location.href.includes(currentPage) ? settingsFilledDanger : settingsOutlinedDanger
          case "logout":
            return logoutIconDanger
          case "email":
            return window.location.href.includes(currentPage) ? emailFilledDanger : emailOutlinedDanger
          case "documentation":
            return window.location.href.includes(currentPage) ? documentationFilledDanger : documentationOutlinedDanger
          case "core":
            return window.location.href.includes(currentPage) ? coreFilledDanger : coreOutlinedDanger
          case "ui":
            return window.location.href.includes(currentPage) ? darkUIDanger : lightUIDanger
          case "forms":
            return window.location.href.includes(currentPage) ? formsFilledDanger : formsOutlinedDanger
          case "charts":
            return window.location.href.includes(currentPage) ? chartsFilledDanger : chartsOutlinedDanger
          case "grid":
            return window.location.href.includes(currentPage) ? gridFilledDanger : gridOutlinedDanger
          case "tables":
            return window.location.href.includes(currentPage) ? tablesFilledDanger : tablesOutlinedDanger
          case "maps":
            return window.location.href.includes(currentPage) ? mapsFilledDanger : mapsOutlinedDanger
          case "extra":
            return window.location.href.includes(currentPage) ? extraFilledDanger : extraOutlinedDanger
        }
      case 'success':
        switch (currentPage) {
          case "dashboard":
            return window.location.href.includes(currentPage) ? darkDashboardIconSuccess : lightDashboardIconSuccess
          case "eccomerce":
            return window.location.href.includes(currentPage) ? eCommerceFilledSuccess : eCommerceOutlinedSuccess
          case "package":
            return window.location.href.includes(currentPage) ? packageFilledSuccess : packageOutlinedSuccess
          case "profile":
            return window.location.href.includes(currentPage) ? profileFilledSuccess : profileOutlinedSuccess
          case "settings":
            return window.location.href.includes(currentPage) ? settingsFilledSuccess : settingsOutlinedSuccess
          case "logout":
            return logoutIconSuccess
          case "email":
            return window.location.href.includes(currentPage) ? emailFilledSuccess : emailOutlinedSuccess
          case "documentation":
            return window.location.href.includes(currentPage) ? documentationFilledSuccess : documentationOutlinedSuccess
          case "core":
            return window.location.href.includes(currentPage) ? coreFilledSuccess : coreOutlinedSuccess
          case "ui":
            return window.location.href.includes(currentPage) ? darkUISuccess : lightUISuccess
          case "forms":
            return window.location.href.includes(currentPage) ? formsFilledSuccess : formsOutlinedSuccess
          case "charts":
            return window.location.href.includes(currentPage) ? chartsFilledSuccess : chartsOutlinedSuccess
          case "grid":
            return window.location.href.includes(currentPage) ? gridFilledSuccess : gridOutlinedSuccess
          case "tables":
            return window.location.href.includes(currentPage) ? tablesFilledSuccess : tablesOutlinedSuccess
          case "maps":
            return window.location.href.includes(currentPage) ? mapsFilledSuccess : mapsOutlinedSuccess
          case "extra":
            return window.location.href.includes(currentPage) ? extraFilledSuccess : extraOutlinedSuccess
        }
      case 'info':
        switch (currentPage) {
          case "dashboard":
            return window.location.href.includes(currentPage) ? darkDashboardIconBlue : lightDashboardIconBlue
          case "eccomerce":
            return window.location.href.includes(currentPage) ? eCommerceFilledBlue : eCommerceOutlinedBlue
          case "package":
            return window.location.href.includes(currentPage) ? packageFilledBlue : packageOutlinedBlue
          case "profile":
            return window.location.href.includes(currentPage) ? profileFilledBlue : profileOutlinedBlue
          case "settings":
            return window.location.href.includes(currentPage) ? settingsFilledBlue : settingsOutlinedBlue
          case "logout":
            return logoutIconBlue
          case "email":
            return window.location.href.includes(currentPage) ? emailFilledBlue : emailOutlinedBlue
          case "documentation":
            return window.location.href.includes(currentPage) ? documentationFilledBlue : documentationOutlinedBlue
          case "core":
            return window.location.href.includes(currentPage) ? coreFilledBlue : coreOutlinedBlue
          case "ui":
            return window.location.href.includes(currentPage) ? darkUIBlue : lightUIBlue
          case "forms":
            return window.location.href.includes(currentPage) ? formsFilledBlue : formsOutlinedBlue
          case "charts":
            return window.location.href.includes(currentPage) ? chartsFilledBlue : chartsOutlinedBlue
          case "grid":
            return window.location.href.includes(currentPage) ? gridFilledBlue : gridOutlinedBlue
          case "tables":
            return window.location.href.includes(currentPage) ? tablesFilledBlue : tablesOutlinedBlue
          case "maps":
            return window.location.href.includes(currentPage) ? mapsFilledBlue : mapsOutlinedBlue
          case "extra":
            return window.location.href.includes(currentPage) ? extraFilledBlue : extraOutlinedBlue
        }
    }
  }

  getLogoImage() {
    switch(this.props.themeColor) {
      case "warning":
        return logo;
      case "danger":
        return logoDanger;
      case "success":
        return logoSuccess;
      case "info":
        return logoBlue;
    }
  }

  componentDidUpdate() {
    console.log(this.props.themeColor)
  }

  render() {
    return (
      <div
        className={`${
          !this.props.sidebarOpened && !this.props.sidebarStatic
            ? s.sidebarClose
            : ""
        } ${s.sidebarWrapper} ${cx({
          [`bg-transparent shadow-none`]:
            this.props.sidebarType === "transparent",
        })}`}
      >
        <nav
          className={`${s.root} ${cx({
            [`bg-transparent`]: this.props.sidebarType === "transparent",
          })}`}
        >
          <header className={s.logo}>
            <img src={this.getLogoImage()} alt="logo" className={s.logoStyle} />
            <span>Flatlogic&nbsp;</span> One
          </header>
          <section className={s.menuWrapper}>
            <h5 className={s.navTitle}>APP</h5>
            <ul className={s.nav}>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Dashboard"
                isHeader
                link="/app/dashboard"
                index="dashboard"
                exact={false}
                childrenLinks={[
                  {
                    header: "Analytics",
                    link: "/app/dashboard/analytics",
                  },
                  {
                    header: "Visits",
                    link: "/app/dashboard/visits",
                  },
                ]}
              >
                <img
                  src={this.themeIcons(
                    "dashboard"
                  )}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="E-commerce"
                isHeader
                label={"NodeJS"}
                labelColor={"danger"}
                link="/app/ecommerce"
                index="ecommerce"
                exact={false}
                childrenLinks={[
                  {
                    header: "Product Management",
                    link: "/app/ecommerce/management",
                  },
                  {
                    header: "Products Grid",
                    link: "/app/ecommerce/products",
                  },
                  {
                    header: "Product Page",
                    link: "/app/ecommerce/product",
                  },
                ]}
              >

                  <img
                    src={this.themeIcons(
                          "eccomerce"
                    )}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Package"
                isHeader
                link="/app/package"
                index="package"
              >
                  <img
                      src={this.themeIcons(
                          "package"
                      )}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Profile"
                isHeader
                link="/app/profile"
                index="profile"
              >
                  <img
                      src={this.themeIcons(
                          "profile"
                      )}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Email"
                isHeader
                link="/app/email"
                index="email"
                badge={9}
              >
                  <img
                      src={this.themeIcons(
                          "email"
                      )}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Documentation"
                isHeader
                link="/app/documentation"
                index="documentation"
              >
                  <img
                      src={this.themeIcons(
                          "documentation"
                      )}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
              </LinksGroup>
            </ul>
            <h5 className={s.navTitle}>TEMPLATE</h5>
            <ul className={s.nav}>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Core"
                isHeader
                link="/app/core"
                index="core"
                exact={false}
                childrenLinks={[
                  {
                    header: "Typography",
                    link: "/app/core/typography",
                  },
                  {
                    header: "Colors",
                    link: "/app/core/colors",
                  },
                  {
                    header: "Grid",
                    link: "/app/core/grid",
                  },
                ]}
              >
                  <img
                      src={this.themeIcons(
                          "core"
                      )}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="UI Elements"
                isHeader
                link="/app/ui"
                index="ui"
                exact={false}
                childrenLinks={[
                  {
                    header: "Alerts",
                    link: "/app/ui/alerts",
                  },
                  {
                    header: "Badge",
                    link: "/app/ui/badge",
                  },
                  {
                    header: "Buttons",
                    link: "/app/ui/buttons",
                  },
                  {
                    header: "Card",
                    link: "/app/ui/card",
                  },
                  {
                    header: "Carousel",
                    link: "/app/ui/carousel",
                  },
                  {
                    header: "Jumbotron",
                    link: "/app/ui/jumbotron",
                  },
                  {
                    header: "List Groups",
                    link: "/app/ui/list-groups",
                  },
                  {
                    header: "Modal",
                    link: "/app/ui/modal",
                  },
                  {
                    header: "Nav",
                    link: "/app/ui/nav",
                  },
                  {
                    header: "Navbar",
                    link: "/app/ui/navbar",
                  },
                  {
                    header: "Popovers & Tooltips",
                    link: "/app/ui/popovers",
                  },
                  {
                    header: "Progress",
                    link: "/app/ui/progress",
                  },
                  {
                    header: "Tabs & Accordion",
                    link: "/app/ui/tabs",
                  },
                  {
                    header: "Icons",
                    link: "/app/ui/icons",
                  },
                  {
                    header: "Notifications",
                    link: "/app/ui/notifications",
                  },
                ]}
              >
                  <img
                      src={this.themeIcons(
                          "ui"
                      )}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Forms"
                isHeader
                link="/app/forms"
                index="forms"
                exact={false}
                childrenLinks={[
                  {
                    header: "Forms Elements",
                    link: "/app/forms/elements",
                  },
                  {
                    header: "Forms Validation",
                    link: "/app/forms/validation",
                  },
                  {
                    header: "Forms Wizard",
                    link: "/app/forms/wizard",
                  },
                ]}
              >
                  <img
                      src={this.themeIcons(
                          "forms"
                      )}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Charts"
                isHeader
                link="/app/charts"
                index="charts"
                exact={false}
                childrenLinks={[
                  {
                    header: "Charts Overview",
                    link: "/app/charts/overview",
                  },
                  {
                    header: "Apex Charts",
                    link: "/app/charts/apex",
                  },
                  {
                    header: "Echarts Charts",
                    link: "/app/charts/echarts",
                  },
                ]}
              >
                  <img
                      src={this.themeIcons(
                          "charts"
                      )}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Grid"
                isHeader
                link="/app/grid"
                index="grid"
              >
                  <img
                      src={this.themeIcons(
                          "grid"
                      )}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Tables"
                isHeader
                link="/app/tables"
                index="tables"
                exact={true}
                childrenLinks={[
                  {
                    header: "Tables Basic",
                    link: "/app/tables/basic",
                  },
                  {
                    header: "Tables Dynamic",
                    link: "/app/tables/dynamic",
                  },
                ]}
              >
                  <img
                      src={this.themeIcons(
                          "tables"
                      )}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Maps"
                isHeader
                link="/app/maps"
                index="maps"
                exact={true}
                childrenLinks={[
                  {
                    header: "Google Maps",
                    link: "/app/maps/google",
                  },
                  {
                    header: "Vector Map",
                    link: "/app/maps/vector",
                  },
                ]}
              >
                  <img
                      src={this.themeIcons(
                          "maps"
                      )}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Extra"
                isHeader
                link="/app/extra"
                index="extra"
                exact={true}
                childrenLinks={[
                  {
                    header: "Calendar",
                    link: "/app/extra/calendar",
                  },
                  {
                    header: "Invoice",
                    link: "/app/extra/invoice",
                  },
                  {
                    header: "Login Page",
                    link: "/app/login",
                  },
                  {
                    header: "Error Page",
                    link: "/app/extra/error",
                  },
                  {
                    header: "Gallery",
                    link: "/app/extra/gallery",
                  },
                  {
                    header: "Search Result",
                    link: "/app/extra/search",
                  },
                  {
                    header: "Time line",
                    link: "/app/extra/timeline",
                  },
                ]}
              >
                  <img
                      src={this.themeIcons(
                          "extra"
                      )}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
              </LinksGroup>
            </ul>
            <ul className={s.downNav}>
              <hr />
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                header="Settings"
                isHeader
                index="main"
              >
                <img
                    src={this.themeIcons(
                        "settings"
                    )}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                header="Account"
                isHeader
              >
                <img
                    src={this.themeIcons(
                        "profile"
                    )}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                header="Logout"
                isHeader
                onClick={() => this.doLogout()}
              >
                  <img
                      src={this.themeIcons(
                          "logout"
                      )}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
              </LinksGroup>
            </ul>
          </section>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    alertsList: store.alerts.alertsList,
    activeItem: store.navigation.activeItem,
    navbarType: store.navigation.navbarType,
    sidebarColor: store.layout.sidebarColor,
    sidebarType: store.layout.sidebarType,
    themeColor: store.layout.themeColor
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
