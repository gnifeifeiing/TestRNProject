package com.testproject.module;

import android.content.Intent;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Administrator on 2017/4/15.
 */

public class SendBroadcastModule extends ReactContextBaseJavaModule {

    public SendBroadcastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "SendBroadcast";
    }

    @ReactMethod
    public void sendBroadcast(){
        Toast.makeText(getReactApplicationContext(),"开始发送...", Toast.LENGTH_SHORT).show();
        Intent intent=new Intent("com.example.broadcastreceiverdemo.BROADCAST");
        intent.putExtra("data", "hello");
        getReactApplicationContext().sendBroadcast(intent);
    }

    @Override
    public boolean canOverrideExistingModule() {
        return true;
    }
}
