package com.testproject;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

/**
 * Created by Administrator on 2017/4/15.
 */

public class MyBroadcastReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context arg0, Intent arg1) {
        // TODO Auto-generated method stub
        String string=arg1.getStringExtra("data");
        Toast.makeText(arg0, "received:"+string, Toast.LENGTH_SHORT).show();

    }

}
