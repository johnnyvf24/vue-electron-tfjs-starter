// below code is under worker environment
// to import tfjs into worker from a cdn
// importScripts("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs");

import * as tf from '@tensorflow/tfjs';

// create 2 tensors and add them up
const a = tf.ones([2, 2]);
const b = tf.ones([2, 2]);
c = a.add(b);
// post back the result
self.postMessage({data: c.dataSync()}); 