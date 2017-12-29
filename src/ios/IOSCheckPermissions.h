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

#import <UIKit/UIKit.h>
#import <AVFoundation/AVFoundation.h>
#import <AssetsLibrary/AssetsLibrary.h>
#import <Cordova/CDVPlugin.h>

@interface IOSCheckPermissions : CDVPlugin

@property (nonatomic, assign) BOOL access;

/**
 *  Enable logs for using the library with monitoring of your functionality. 
 *  The default is NO.
 *
 *  @param enableLogs YES for enable or NO to disable logs.
 */
- (void)enableCheckPermissionLogs:(BOOL)enableLogs;

- (void)checkPermissionAccessForPhotos:(CDVInvokedUrlCommand*)command;
- (void)checkPermissionAccessForCalendar:(CDVInvokedUrlCommand*)command;
- (void)checkPermissionAccessForReminder:(CDVInvokedUrlCommand*)command;
- (void)checkPermissionAccessForLocation:(CDVInvokedUrlCommand*)command;

@end
