package com.montra;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import expo.modules.splashscreen.singletons.SplashScreen;
import expo.modules.splashscreen.SplashScreenImageResizeMode;

public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
        SplashScreen.show(this, SplashScreenImageResizeMode.COVER, ReactRootView.class, false);
    }

    @Override
    protected String getMainComponentName() {
        return "main";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
}
