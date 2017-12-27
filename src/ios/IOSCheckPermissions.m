//
//  Created by Douglas Frari on 7/13/15.
//
//  The MIT License (MIT)
//
//  Copyright (c) 2015 Douglas Frari
//
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in all
//  copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//  SOFTWARE.

#import "IOSCheckPermissions.h"
#import <Cordova/CDV.h>

@interface IOSCheckPermissions() <CLLocationManagerDelegate>

@property (strong,nonatomic) CLLocationManager *locationManagerFromLib;
@property (assign,nonatomic) BOOL checkingLocationPermission;
@property (assign,nonatomic) enum AuthorizeRequestType type;
@property (strong,nonatomic) id localizationFailureBlock;
@property (strong,nonatomic) id localizationSuccessBlock;
@property (assign,nonatomic) CLAuthorizationStatus authorizationStatus;

@end

@implementation IOSCheckPermissions

static BOOL isEnableLogs = NO;


+ (instancetype)globalInstance {
    static IOSCheckPermissions *sharedInstance;
    
    @synchronized(self) {
        if (sharedInstance == nil) {
            sharedInstance = [[self alloc] init];
        }
    }
    return sharedInstance;
}


- (void)enableCheckPermissionLogs:(BOOL)enableLogs {
    isEnableLogs = enableLogs;
    
    if (isEnableLogs) {
        NSLog(@"- the log message was enable on iOS-Check-Permission -");
    }
}

- (void)checkPermissionAccessForCalendar:(CDVInvokedUrlCommand*)command {
    
}

- (void)checkPermissionAccessForGallery:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    
    @try {
        ALAuthorizationStatus authStatus = [ALAssetsLibrary authorizationStatus];
        
        if (authStatus == AVAuthorizationStatusAuthorized) {
            if (isEnableLogs) {
                NSLog(@"- checkPermissionAccessForGallery - successBlock (status: Authorized)");
            }
            
            pluginResult = [CDVPluginResult resultWithStatus:YES];
        }
        else if (authStatus == AVAuthorizationStatusNotDetermined) {
            
            ALAssetsLibrary *assetsLibrary = [[ALAssetsLibrary alloc] init];
            
        } else {
            if (isEnableLogs) {
                NSLog(@"- - checkPermissionAccessForGallery - failureBlock (status: Restricted or Denied)");
            }
            
            pluginResult = [CDVPluginResult resultWithStatus:NO];
        }
    } @catch (NSException *exception) {
        if (isEnableLogs) {
            NSLog(@"- - checkPermissionAccessForGallery - failureBlock (status: Restricted or Denied)");
        }
        
        pluginResult = [CDVPluginResult resultWithStatus:NO];
    }
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)checkPermissionAccessForReminder:(CDVInvokedUrlCommand*)command {
    
}

-(void)checkPermissionAccessForLocation:(CDVInvokedUrlCommand*)command {
    
}

@end
