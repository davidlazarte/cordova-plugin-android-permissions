var permissionsName = 'Permissions';

function Permissions() {
    this.ACCESS_CHECKIN_PROPERTIES = 'checkPermissionAccessForPhotos';
    this.ACCESS_COARSE_LOCATION = 'checkPermissionAccessForPhotos';
    this.ACCESS_FINE_LOCATION = 'checkPermissionAccessForPhotos';
    this.ACCESS_LOCATION_EXTRA_COMMANDS = 'checkPermissionAccessForPhotos';
    this.ACCESS_MOCK_LOCATION = 'checkPermissionAccessForPhotos';
    this.ACCESS_NETWORK_STATE = 'checkPermissionAccessForPhotos';
    this.ACCESS_SURFACE_FLINGER = 'checkPermissionAccessForPhotos';
    this.ACCESS_WIFI_STATE = 'checkPermissionAccessForPhotos';
    this.ACCOUNT_MANAGER = 'checkPermissionAccessForPhotos';
    this.ADD_VOICEMAIL = 'checkPermissionAccessForPhotos';
    this.AUTHENTICATE_ACCOUNTS = 'checkPermissionAccessForPhotos';
    this.BATTERY_STATS = 'checkPermissionAccessForPhotos';
    this.BIND_ACCESSIBILITY_SERVICE = 'checkPermissionAccessForPhotos';
    this.BIND_APPWIDGET = 'checkPermissionAccessForPhotos';
    this.BIND_CARRIER_MESSAGING_SERVICE = 'checkPermissionAccessForPhotos';
    this.BIND_DEVICE_ADMIN = 'checkPermissionAccessForPhotos';
    this.BIND_DREAM_SERVICE = 'checkPermissionAccessForPhotos';
    this.BIND_INPUT_METHOD = 'checkPermissionAccessForPhotos';
    this.BIND_NFC_SERVICE = 'checkPermissionAccessForPhotos';
    this.BIND_NOTIFICATION_LISTENER_SERVICE = 'checkPermissionAccessForPhotos';
    this.BIND_PRINT_SERVICE = 'checkPermissionAccessForPhotos';
    this.BIND_REMOTEVIEWS = 'checkPermissionAccessForPhotos';
    this.BIND_TEXT_SERVICE = 'checkPermissionAccessForPhotos';
    this.BIND_TV_INPUT = 'checkPermissionAccessForPhotos';
    this.BIND_VOICE_INTERACTION = 'checkPermissionAccessForPhotos';
    this.BIND_VPN_SERVICE = 'checkPermissionAccessForPhotos';
    this.BIND_WALLPAPER = 'checkPermissionAccessForPhotos';
    this.BLUETOOTH = 'checkPermissionAccessForPhotos';
    this.BLUETOOTH_ADMIN = 'checkPermissionAccessForPhotos';
    this.BLUETOOTH_PRIVILEGED = 'checkPermissionAccessForPhotos';
    this.BODY_SENSORS = 'checkPermissionAccessForPhotos';
    this.BRICK = 'checkPermissionAccessForPhotos';
    this.BROADCAST_PACKAGE_REMOVED = 'checkPermissionAccessForPhotos';
    this.BROADCAST_SMS = 'checkPermissionAccessForPhotos';
    this.BROADCAST_STICKY = 'checkPermissionAccessForPhotos';
    this.BROADCAST_WAP_PUSH = 'checkPermissionAccessForPhotos';
    this.CALL_PHONE = 'checkPermissionAccessForPhotos';
    this.CALL_PRIVILEGED = 'checkPermissionAccessForPhotos';
    this.CAMERA = 'checkPermissionAccessForPhotos';
    this.CAPTURE_AUDIO_OUTPUT = 'checkPermissionAccessForPhotos';
    this.CAPTURE_SECURE_VIDEO_OUTPUT = 'checkPermissionAccessForPhotos';
    this.CAPTURE_VIDEO_OUTPUT = 'checkPermissionAccessForPhotos';
    this.CHANGE_COMPONENT_ENABLED_STATE = 'checkPermissionAccessForPhotos';
    this.CHANGE_CONFIGURATION = 'checkPermissionAccessForPhotos';
    this.CHANGE_NETWORK_STATE = 'checkPermissionAccessForPhotos';
    this.CHANGE_WIFI_MULTICAST_STATE = 'checkPermissionAccessForPhotos';
    this.CHANGE_WIFI_STATE = 'checkPermissionAccessForPhotos';
    this.CLEAR_APP_CACHE = 'checkPermissionAccessForPhotos';
    this.CLEAR_APP_USER_DATA = 'checkPermissionAccessForPhotos';
    this.CONTROL_LOCATION_UPDATES = 'checkPermissionAccessForPhotos';
    this.DELETE_CACHE_FILES = 'checkPermissionAccessForPhotos';
    this.DELETE_PACKAGES = 'checkPermissionAccessForPhotos';
    this.DEVICE_POWER = 'checkPermissionAccessForPhotos';
    this.DIAGNOSTIC = 'checkPermissionAccessForPhotos';
    this.DISABLE_KEYGUARD = 'checkPermissionAccessForPhotos';
    this.DUMP = 'checkPermissionAccessForPhotos';
    this.EXPAND_STATUS_BAR = 'checkPermissionAccessForPhotos';
    this.FACTORY_TEST = 'checkPermissionAccessForPhotos';
    this.FLASHLIGHT = 'checkPermissionAccessForPhotos';
    this.FORCE_BACK = 'checkPermissionAccessForPhotos';
    this.GET_ACCOUNTS = 'checkPermissionAccessForPhotos';
    this.GET_PACKAGE_SIZE = 'checkPermissionAccessForPhotos';
    this.GET_TASKS = 'checkPermissionAccessForPhotos';
    this.GET_TOP_ACTIVITY_INFO = 'checkPermissionAccessForPhotos';
    this.GLOBAL_SEARCH = 'checkPermissionAccessForPhotos';
    this.HARDWARE_TEST = 'checkPermissionAccessForPhotos';
    this.INJECT_EVENTS = 'checkPermissionAccessForPhotos';
    this.INSTALL_LOCATION_PROVIDER = 'checkPermissionAccessForPhotos';
    this.INSTALL_PACKAGES = 'checkPermissionAccessForPhotos';
    this.INSTALL_SHORTCUT = 'checkPermissionAccessForPhotos';
    this.INTERNAL_SYSTEM_WINDOW = 'checkPermissionAccessForPhotos';
    this.INTERNET = 'checkPermissionAccessForPhotos';
    this.KILL_BACKGROUND_PROCESSES = 'checkPermissionAccessForPhotos';
    this.LOCATION_HARDWARE = 'checkPermissionAccessForPhotos';
    this.MANAGE_ACCOUNTS = 'checkPermissionAccessForPhotos';
    this.MANAGE_APP_TOKENS = 'checkPermissionAccessForPhotos';
    this.MANAGE_DOCUMENTS = 'checkPermissionAccessForPhotos';
    this.MASTER_CLEAR = 'checkPermissionAccessForPhotos';
    this.MEDIA_CONTENT_CONTROL = 'checkPermissionAccessForPhotos';
    this.MODIFY_AUDIO_SETTINGS = 'checkPermissionAccessForPhotos';
    this.MODIFY_PHONE_STATE = 'checkPermissionAccessForPhotos';
    this.MOUNT_FORMAT_FILESYSTEMS = 'checkPermissionAccessForPhotos';
    this.MOUNT_UNMOUNT_FILESYSTEMS = 'checkPermissionAccessForPhotos';
    this.NFC = 'checkPermissionAccessForPhotos';
    this.PERSISTENT_ACTIVITY = 'checkPermissionAccessForPhotos';
    this.PROCESS_OUTGOING_CALLS = 'checkPermissionAccessForPhotos';
    this.READ_CALENDAR = 'checkPermissionAccessForPhotos';
    this.READ_CALL_LOG = 'checkPermissionAccessForPhotos';
    this.READ_CONTACTS = 'checkPermissionAccessForPhotos';
    this.READ_EXTERNAL_STORAGE = 'checkPermissionAccessForPhotos';
    this.READ_FRAME_BUFFER = 'checkPermissionAccessForPhotos';
    this.READ_HISTORY_BOOKMARKS = 'checkPermissionAccessForPhotos';
    this.READ_INPUT_STATE = 'checkPermissionAccessForPhotos';
    this.READ_LOGS = 'checkPermissionAccessForPhotos';
    this.READ_PHONE_STATE = 'checkPermissionAccessForPhotos';
    this.READ_PROFILE = 'checkPermissionAccessForPhotos';
    this.READ_SMS = 'checkPermissionAccessForPhotos';
    this.READ_SOCIAL_STREAM = 'checkPermissionAccessForPhotos';
    this.READ_SYNC_SETTINGS = 'checkPermissionAccessForPhotos';
    this.READ_SYNC_STATS = 'checkPermissionAccessForPhotos';
    this.READ_USER_DICTIONARY = 'checkPermissionAccessForPhotos';
    this.READ_VOICEMAIL = 'checkPermissionAccessForPhotos';
    this.REBOOT = 'checkPermissionAccessForPhotos';
    this.RECEIVE_BOOT_COMPLETED = 'checkPermissionAccessForPhotos';
    this.RECEIVE_MMS = 'checkPermissionAccessForPhotos';
    this.RECEIVE_SMS = 'checkPermissionAccessForPhotos';
    this.RECEIVE_WAP_PUSH = 'checkPermissionAccessForPhotos';
    this.RECORD_AUDIO = 'checkPermissionAccessForPhotos';
    this.REORDER_TASKS = 'checkPermissionAccessForPhotos';
    this.RESTART_PACKAGES = 'checkPermissionAccessForPhotos';
    this.SEND_RESPOND_VIA_MESSAGE = 'checkPermissionAccessForPhotos';
    this.SEND_SMS = 'checkPermissionAccessForPhotos';
    this.SET_ACTIVITY_WATCHER = 'checkPermissionAccessForPhotos';
    this.SET_ALARM = 'checkPermissionAccessForPhotos.checkPermissionAccessForPhotos';
    this.SET_ALWAYS_FINISH = 'checkPermissionAccessForPhotos';
    this.SET_ANIMATION_SCALE = 'checkPermissionAccessForPhotos';
    this.SET_DEBUG_APP = 'checkPermissionAccessForPhotos';
    this.SET_ORIENTATION = 'checkPermissionAccessForPhotos';
    this.SET_POINTER_SPEED = 'checkPermissionAccessForPhotos';
    this.SET_PREFERRED_APPLICATIONS = 'checkPermissionAccessForPhotos';
    this.SET_PROCESS_LIMIT = 'checkPermissionAccessForPhotos';
    this.SET_TIME = 'checkPermissionAccessForPhotos';
    this.SET_TIME_ZONE = 'checkPermissionAccessForPhotos';
    this.SET_WALLPAPER = 'checkPermissionAccessForPhotos';
    this.SET_WALLPAPER_HINTS = 'checkPermissionAccessForPhotos';
    this.SIGNAL_PERSISTENT_PROCESSES = 'checkPermissionAccessForPhotos';
    this.STATUS_BAR = 'checkPermissionAccessForPhotos';
    this.SUBSCRIBED_FEEDS_READ = 'checkPermissionAccessForPhotos';
    this.SUBSCRIBED_FEEDS_WRITE = 'checkPermissionAccessForPhotos';
    this.SYSTEM_ALERT_WINDOW = 'checkPermissionAccessForPhotos';
    this.TRANSMIT_IR = 'checkPermissionAccessForPhotos';
    this.UNINSTALL_SHORTCUT = 'checkPermissionAccessForPhotos';
    this.UPDATE_DEVICE_STATS = 'checkPermissionAccessForPhotos';
    this.USE_CREDENTIALS = 'checkPermissionAccessForPhotos';
    this.USE_SIP = 'checkPermissionAccessForPhotos';
    this.VIBRATE = 'checkPermissionAccessForPhotos';
    this.WAKE_LOCK = 'checkPermissionAccessForPhotos';
    this.WRITE_APN_SETTINGS = 'checkPermissionAccessForPhotos';
    this.WRITE_CALENDAR = 'checkPermissionAccessForPhotos';
    this.WRITE_CALL_LOG = 'checkPermissionAccessForPhotos';
    this.WRITE_CONTACTS = 'checkPermissionAccessForPhotos';
    this.WRITE_EXTERNAL_STORAGE = 'checkPermissionAccessForPhotos';
    this.WRITE_GSERVICES = 'checkPermissionAccessForPhotos';
    this.WRITE_HISTORY_BOOKMARKS = 'checkPermissionAccessForPhotos';
    this.WRITE_PROFILE = 'checkPermissionAccessForPhotos';
    this.WRITE_SECURE_SETTINGS = 'checkPermissionAccessForPhotos';
    this.WRITE_SETTINGS = 'checkPermissionAccessForPhotos';
    this.WRITE_SMS = 'checkPermissionAccessForPhotos';
    this.WRITE_SOCIAL_STREAM = 'checkPermissionAccessForPhotos';
    this.WRITE_SYNC_SETTINGS = 'checkPermissionAccessForPhotos';
    this.WRITE_USER_DICTIONARY = 'checkPermissionAccessForPhotos';
    this.WRITE_VOICEMAIL = 'checkPermissionAccessForPhotos';
}

function deprecated(name) {
  console.warn("Calling cordova.plugins.permissions." + name + " with the successCallback as first argument is deprecated");
  console.warn("The new signature is '" + name + "(permission, successCallback, errorCallback)'");
}

Permissions.prototype = {
    checkPermission: function(permission, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, permissionsName, permission);
    },
    requestPermission: function(permission, successCallback, errorCallback) {
        if (typeof permission === "function") {
            deprecated("requestPermission");
            successCallback = arguments[0];
            errorCallback = arguments[1];
            permission = arguments[2];
        }
        cordova.exec(successCallback, errorCallback, permissionsName, permissionsName, permission);
    },
    requestPermissions: function(permissions, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, permissionsName, permission);
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
