var permissionsName = 'Permissions';

function Permissions() {
    this.ACCESS_CHECKIN_PROPERTIES = 'checkPermissionAccessForGallery';
    this.ACCESS_COARSE_LOCATION = 'checkPermissionAccessForGallery';
    this.ACCESS_FINE_LOCATION = 'checkPermissionAccessForGallery';
    this.ACCESS_LOCATION_EXTRA_COMMANDS = 'checkPermissionAccessForGallery';
    this.ACCESS_MOCK_LOCATION = 'checkPermissionAccessForGallery';
    this.ACCESS_NETWORK_STATE = 'checkPermissionAccessForGallery';
    this.ACCESS_SURFACE_FLINGER = 'checkPermissionAccessForGallery';
    this.ACCESS_WIFI_STATE = 'checkPermissionAccessForGallery';
    this.ACCOUNT_MANAGER = 'checkPermissionAccessForGallery';
    this.ADD_VOICEMAIL = 'checkPermissionAccessForGallery';
    this.AUTHENTICATE_ACCOUNTS = 'checkPermissionAccessForGallery';
    this.BATTERY_STATS = 'checkPermissionAccessForGallery';
    this.BIND_ACCESSIBILITY_SERVICE = 'checkPermissionAccessForGallery';
    this.BIND_APPWIDGET = 'checkPermissionAccessForGallery';
    this.BIND_CARRIER_MESSAGING_SERVICE = 'checkPermissionAccessForGallery';
    this.BIND_DEVICE_ADMIN = 'checkPermissionAccessForGallery';
    this.BIND_DREAM_SERVICE = 'checkPermissionAccessForGallery';
    this.BIND_INPUT_METHOD = 'checkPermissionAccessForGallery';
    this.BIND_NFC_SERVICE = 'checkPermissionAccessForGallery';
    this.BIND_NOTIFICATION_LISTENER_SERVICE = 'checkPermissionAccessForGallery';
    this.BIND_PRINT_SERVICE = 'checkPermissionAccessForGallery';
    this.BIND_REMOTEVIEWS = 'checkPermissionAccessForGallery';
    this.BIND_TEXT_SERVICE = 'checkPermissionAccessForGallery';
    this.BIND_TV_INPUT = 'checkPermissionAccessForGallery';
    this.BIND_VOICE_INTERACTION = 'checkPermissionAccessForGallery';
    this.BIND_VPN_SERVICE = 'checkPermissionAccessForGallery';
    this.BIND_WALLPAPER = 'checkPermissionAccessForGallery';
    this.BLUETOOTH = 'checkPermissionAccessForGallery';
    this.BLUETOOTH_ADMIN = 'checkPermissionAccessForGallery';
    this.BLUETOOTH_PRIVILEGED = 'checkPermissionAccessForGallery';
    this.BODY_SENSORS = 'checkPermissionAccessForGallery';
    this.BRICK = 'checkPermissionAccessForGallery';
    this.BROADCAST_PACKAGE_REMOVED = 'checkPermissionAccessForGallery';
    this.BROADCAST_SMS = 'checkPermissionAccessForGallery';
    this.BROADCAST_STICKY = 'checkPermissionAccessForGallery';
    this.BROADCAST_WAP_PUSH = 'checkPermissionAccessForGallery';
    this.CALL_PHONE = 'checkPermissionAccessForGallery';
    this.CALL_PRIVILEGED = 'checkPermissionAccessForGallery';
    this.CAMERA = 'checkPermissionAccessForGallery';
    this.CAPTURE_AUDIO_OUTPUT = 'checkPermissionAccessForGallery';
    this.CAPTURE_SECURE_VIDEO_OUTPUT = 'checkPermissionAccessForGallery';
    this.CAPTURE_VIDEO_OUTPUT = 'checkPermissionAccessForGallery';
    this.CHANGE_COMPONENT_ENABLED_STATE = 'checkPermissionAccessForGallery';
    this.CHANGE_CONFIGURATION = 'checkPermissionAccessForGallery';
    this.CHANGE_NETWORK_STATE = 'checkPermissionAccessForGallery';
    this.CHANGE_WIFI_MULTICAST_STATE = 'checkPermissionAccessForGallery';
    this.CHANGE_WIFI_STATE = 'checkPermissionAccessForGallery';
    this.CLEAR_APP_CACHE = 'checkPermissionAccessForGallery';
    this.CLEAR_APP_USER_DATA = 'checkPermissionAccessForGallery';
    this.CONTROL_LOCATION_UPDATES = 'checkPermissionAccessForGallery';
    this.DELETE_CACHE_FILES = 'checkPermissionAccessForGallery';
    this.DELETE_PACKAGES = 'checkPermissionAccessForGallery';
    this.DEVICE_POWER = 'checkPermissionAccessForGallery';
    this.DIAGNOSTIC = 'checkPermissionAccessForGallery';
    this.DISABLE_KEYGUARD = 'checkPermissionAccessForGallery';
    this.DUMP = 'checkPermissionAccessForGallery';
    this.EXPAND_STATUS_BAR = 'checkPermissionAccessForGallery';
    this.FACTORY_TEST = 'checkPermissionAccessForGallery';
    this.FLASHLIGHT = 'checkPermissionAccessForGallery';
    this.FORCE_BACK = 'checkPermissionAccessForGallery';
    this.GET_ACCOUNTS = 'checkPermissionAccessForGallery';
    this.GET_PACKAGE_SIZE = 'checkPermissionAccessForGallery';
    this.GET_TASKS = 'checkPermissionAccessForGallery';
    this.GET_TOP_ACTIVITY_INFO = 'checkPermissionAccessForGallery';
    this.GLOBAL_SEARCH = 'checkPermissionAccessForGallery';
    this.HARDWARE_TEST = 'checkPermissionAccessForGallery';
    this.INJECT_EVENTS = 'checkPermissionAccessForGallery';
    this.INSTALL_LOCATION_PROVIDER = 'checkPermissionAccessForGallery';
    this.INSTALL_PACKAGES = 'checkPermissionAccessForGallery';
    this.INSTALL_SHORTCUT = 'checkPermissionAccessForGallery';
    this.INTERNAL_SYSTEM_WINDOW = 'checkPermissionAccessForGallery';
    this.INTERNET = 'checkPermissionAccessForGallery';
    this.KILL_BACKGROUND_PROCESSES = 'checkPermissionAccessForGallery';
    this.LOCATION_HARDWARE = 'checkPermissionAccessForGallery';
    this.MANAGE_ACCOUNTS = 'checkPermissionAccessForGallery';
    this.MANAGE_APP_TOKENS = 'checkPermissionAccessForGallery';
    this.MANAGE_DOCUMENTS = 'checkPermissionAccessForGallery';
    this.MASTER_CLEAR = 'checkPermissionAccessForGallery';
    this.MEDIA_CONTENT_CONTROL = 'checkPermissionAccessForGallery';
    this.MODIFY_AUDIO_SETTINGS = 'checkPermissionAccessForGallery';
    this.MODIFY_PHONE_STATE = 'checkPermissionAccessForGallery';
    this.MOUNT_FORMAT_FILESYSTEMS = 'checkPermissionAccessForGallery';
    this.MOUNT_UNMOUNT_FILESYSTEMS = 'checkPermissionAccessForGallery';
    this.NFC = 'checkPermissionAccessForGallery';
    this.PERSISTENT_ACTIVITY = 'checkPermissionAccessForGallery';
    this.PROCESS_OUTGOING_CALLS = 'checkPermissionAccessForGallery';
    this.READ_CALENDAR = 'checkPermissionAccessForGallery';
    this.READ_CALL_LOG = 'checkPermissionAccessForGallery';
    this.READ_CONTACTS = 'checkPermissionAccessForGallery';
    this.READ_EXTERNAL_STORAGE = 'checkPermissionAccessForGallery';
    this.READ_FRAME_BUFFER = 'checkPermissionAccessForGallery';
    this.READ_HISTORY_BOOKMARKS = 'checkPermissionAccessForGallery';
    this.READ_INPUT_STATE = 'checkPermissionAccessForGallery';
    this.READ_LOGS = 'checkPermissionAccessForGallery';
    this.READ_PHONE_STATE = 'checkPermissionAccessForGallery';
    this.READ_PROFILE = 'checkPermissionAccessForGallery';
    this.READ_SMS = 'checkPermissionAccessForGallery';
    this.READ_SOCIAL_STREAM = 'checkPermissionAccessForGallery';
    this.READ_SYNC_SETTINGS = 'checkPermissionAccessForGallery';
    this.READ_SYNC_STATS = 'checkPermissionAccessForGallery';
    this.READ_USER_DICTIONARY = 'checkPermissionAccessForGallery';
    this.READ_VOICEMAIL = 'checkPermissionAccessForGallery';
    this.REBOOT = 'checkPermissionAccessForGallery';
    this.RECEIVE_BOOT_COMPLETED = 'checkPermissionAccessForGallery';
    this.RECEIVE_MMS = 'checkPermissionAccessForGallery';
    this.RECEIVE_SMS = 'checkPermissionAccessForGallery';
    this.RECEIVE_WAP_PUSH = 'checkPermissionAccessForGallery';
    this.RECORD_AUDIO = 'checkPermissionAccessForGallery';
    this.REORDER_TASKS = 'checkPermissionAccessForGallery';
    this.RESTART_PACKAGES = 'checkPermissionAccessForGallery';
    this.SEND_RESPOND_VIA_MESSAGE = 'checkPermissionAccessForGallery';
    this.SEND_SMS = 'checkPermissionAccessForGallery';
    this.SET_ACTIVITY_WATCHER = 'checkPermissionAccessForGallery';
    this.SET_ALARM = 'checkPermissionAccessForGallery.checkPermissionAccessForGallery';
    this.SET_ALWAYS_FINISH = 'checkPermissionAccessForGallery';
    this.SET_ANIMATION_SCALE = 'checkPermissionAccessForGallery';
    this.SET_DEBUG_APP = 'checkPermissionAccessForGallery';
    this.SET_ORIENTATION = 'checkPermissionAccessForGallery';
    this.SET_POINTER_SPEED = 'checkPermissionAccessForGallery';
    this.SET_PREFERRED_APPLICATIONS = 'checkPermissionAccessForGallery';
    this.SET_PROCESS_LIMIT = 'checkPermissionAccessForGallery';
    this.SET_TIME = 'checkPermissionAccessForGallery';
    this.SET_TIME_ZONE = 'checkPermissionAccessForGallery';
    this.SET_WALLPAPER = 'checkPermissionAccessForGallery';
    this.SET_WALLPAPER_HINTS = 'checkPermissionAccessForGallery';
    this.SIGNAL_PERSISTENT_PROCESSES = 'checkPermissionAccessForGallery';
    this.STATUS_BAR = 'checkPermissionAccessForGallery';
    this.SUBSCRIBED_FEEDS_READ = 'checkPermissionAccessForGallery';
    this.SUBSCRIBED_FEEDS_WRITE = 'checkPermissionAccessForGallery';
    this.SYSTEM_ALERT_WINDOW = 'checkPermissionAccessForGallery';
    this.TRANSMIT_IR = 'checkPermissionAccessForGallery';
    this.UNINSTALL_SHORTCUT = 'checkPermissionAccessForGallery';
    this.UPDATE_DEVICE_STATS = 'checkPermissionAccessForGallery';
    this.USE_CREDENTIALS = 'checkPermissionAccessForGallery';
    this.USE_SIP = 'checkPermissionAccessForGallery';
    this.VIBRATE = 'checkPermissionAccessForGallery';
    this.WAKE_LOCK = 'checkPermissionAccessForGallery';
    this.WRITE_APN_SETTINGS = 'checkPermissionAccessForGallery';
    this.WRITE_CALENDAR = 'checkPermissionAccessForGallery';
    this.WRITE_CALL_LOG = 'checkPermissionAccessForGallery';
    this.WRITE_CONTACTS = 'checkPermissionAccessForGallery';
    this.WRITE_EXTERNAL_STORAGE = 'checkPermissionAccessForGallery';
    this.WRITE_GSERVICES = 'checkPermissionAccessForGallery';
    this.WRITE_HISTORY_BOOKMARKS = 'checkPermissionAccessForGallery';
    this.WRITE_PROFILE = 'checkPermissionAccessForGallery';
    this.WRITE_SECURE_SETTINGS = 'checkPermissionAccessForGallery';
    this.WRITE_SETTINGS = 'checkPermissionAccessForGallery';
    this.WRITE_SMS = 'checkPermissionAccessForGallery';
    this.WRITE_SOCIAL_STREAM = 'checkPermissionAccessForGallery';
    this.WRITE_SYNC_SETTINGS = 'checkPermissionAccessForGallery';
    this.WRITE_USER_DICTIONARY = 'checkPermissionAccessForGallery';
    this.WRITE_VOICEMAIL = 'checkPermissionAccessForGallery';
}

function deprecated(name) {
  console.warn("Calling cordova.plugins.permissions." + name + " with the successCallback as first argument is deprecated");
  console.warn("The new signature is '" + name + "(permission, successCallback, errorCallback)'");
}

Permissions.prototype = {
    checkPermission: function(permission, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, permissionsName, 'IOSCheckPermissions', [permission]);
    },
    requestPermission: function(permission, successCallback, errorCallback) {
        if (typeof permission === "function") {
            deprecated("requestPermission");
            successCallback = arguments[0];
            errorCallback = arguments[1];
            permission = arguments[2];
        }
        cordova.exec(successCallback, errorCallback, permissionsName, 'IOSCheckPermissions', [permission]);
    },
    requestPermissions: function(permissions, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, permissionsName, 'IOSCheckPermissions', permissions);
    }
};

Permissions.prototype.hasPermission = function (permission, successCallback, errorCallback) {
    console.warn("hasPermission() function deprecated. Considers using checkPermission()");

    if (typeof permission === "function") {
        deprecated("hasPermission");
        successCallback = arguments[0];
        errorCallback = arguments[1];
        permission = arguments[2];
    }
    this.checkPermission.call(this, permission, successCallback, errorCallback);
};

module.exports = new Permissions();
