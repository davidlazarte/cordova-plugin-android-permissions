/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at
 
 http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

#import <Cordova/CDV.h>
#import "IOSCheckPermissions.h"

@interface IOSCheckPermissions()
{}
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

- (void)checkPermissionAccessForCalendar:(CDVInvokedUrlCommand*)command {}

- (void)checkPermissionAccessForPhotos:(CDVInvokedUrlCommand *) command {
    BOOL status = NO;
    
    @try {
        ALAuthorizationStatus authStatus = [ALAssetsLibrary authorizationStatus];
        
        if (authStatus == AVAuthorizationStatusAuthorized) {
            if (isEnableLogs) {
                NSLog(@"- checkPermissionAccessForGallery - successBlock (status: Authorized)");
            }
            
            status = YES;
        }
        else if (authStatus == AVAuthorizationStatusNotDetermined) {
           
        }
        else {
            if (isEnableLogs) {
                NSLog(@"Photo Library: Restricted or Denied");
            }
        }
    } @catch (NSException *exception) {
        if (isEnableLogs) {
            NSLog(@"Photo Library: Restricted or Denied");
        }
    }
    
    NSDictionary *results = @{
                              @"hasPermission" : [NSNumber numberWithBool:status]
                              };
    
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:results];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)checkPermissionAccessForReminder:(CDVInvokedUrlCommand*)command {
    
}

-(void)checkPermissionAccessForLocation:(CDVInvokedUrlCommand*)command {
    
}

@end
