---
title: Media Capture
template: enterprise-plugin
version: 3.0.2
minor: 3.0.X
---



## Index

### Classes

* [MediaCapture](#mediacapture)

### Interfaces

* [CaptureAudioOptions](#captureaudiooptions)
* [CaptureError](#captureerror)
* [CaptureImageOptions](#captureimageoptions)
* [CaptureVideoOptions](#capturevideooptions)
* [ConfigurationData](#configurationdata)
* [MediaFile](#mediafile)
* [MediaFileData](#mediafiledata)

---

## Classes

<a id="mediacapture"></a>

###  MediaCapture

**MediaCapture**: 

*__name__*: Media Capture

*__description__*: This plugin provides access to the device's audio, image, and video capture capabilities.

*__usage__*:
 ```typescript
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-enterprise/media-capture/ngx';

constructor(private mediaCapture: MediaCapture) { }

...

let options: CaptureImageOptions = { limit: 3 }
this.mediaCapture.captureImage(options)
  .then(
    (data: MediaFile[]) => console.log(data),
    (err: CaptureError) => console.error(err)
  );

```

*__interfaces__*: MediaFile MediaFileData CaptureError CaptureAudioOptions CaptureImageOptions CaptureVideoOptions ConfigurationData

<a id="mediacapture.supportedaudiomodes"></a>

###  supportedAudioModes

**● supportedAudioModes**: *[ConfigurationData](#configurationdata)[]*

The audio recording formats supported by the device.

*__returns__*: 

___
<a id="mediacapture.supportedimagemodes"></a>

###  supportedImageModes

**● supportedImageModes**: *[ConfigurationData](#configurationdata)[]*

The recording image sizes and formats supported by the device.

*__returns__*: 

___
<a id="mediacapture.supportedvideomodes"></a>

###  supportedVideoModes

**● supportedVideoModes**: *[ConfigurationData](#configurationdata)[]*

The recording video resolutions and formats supported by the device.

*__returns__*: 

___
<a id="mediacapture.captureaudio"></a>

###  captureAudio

▸ **captureAudio**(options?: *[CaptureAudioOptions](#captureaudiooptions)*): `Promise`<[MediaFile](#mediafile)[] \| [CaptureError](#captureerror)>

Start the audio recorder application and return information about captured audio clip files.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [CaptureAudioOptions](#captureaudiooptions) |  \- |

**Returns:** `Promise`<[MediaFile](#mediafile)[] \| [CaptureError](#captureerror)>

___
<a id="mediacapture.captureimage"></a>

###  captureImage

▸ **captureImage**(options?: *[CaptureImageOptions](#captureimageoptions)*): `Promise`<[MediaFile](#mediafile)[] \| [CaptureError](#captureerror)>

Start the camera application and return information about captured image files.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [CaptureImageOptions](#captureimageoptions) |  \- |

**Returns:** `Promise`<[MediaFile](#mediafile)[] \| [CaptureError](#captureerror)>

___
<a id="mediacapture.capturevideo"></a>

###  captureVideo

▸ **captureVideo**(options?: *[CaptureVideoOptions](#capturevideooptions)*): `Promise`<[MediaFile](#mediafile)[] \| [CaptureError](#captureerror)>

Start the video recorder application and return information about captured video clip files.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [CaptureVideoOptions](#capturevideooptions) |  \- |

**Returns:** `Promise`<[MediaFile](#mediafile)[] \| [CaptureError](#captureerror)>

___
<a id="mediacapture.onpendingcaptureerror"></a>

###  onPendingCaptureError

▸ **onPendingCaptureError**(): `Observable`<[CaptureError](#captureerror)>

is fired if the capture call is unsuccessful

**Returns:** `Observable`<[CaptureError](#captureerror)>

___
<a id="mediacapture.onpendingcaptureresult"></a>

###  onPendingCaptureResult

▸ **onPendingCaptureResult**(): `Observable`<[MediaFile](#mediafile)[]>

is fired if the capture call is successful

**Returns:** `Observable`<[MediaFile](#mediafile)[]>

___

___

## Interfaces

<a id="captureaudiooptions"></a>

###  CaptureAudioOptions

**CaptureAudioOptions**: 

<a id="captureaudiooptions.duration"></a>

### `<Optional>` duration

**● duration**: *`number`*

Maximum duration of an audio sound clip, in seconds. This does not work on Android devices.

___
<a id="captureaudiooptions.limit"></a>

### `<Optional>` limit

**● limit**: *`number`*

Maximum number of audio clips. Defaults to 1. On iOS you can only record one file.

___

___
<a id="captureerror"></a>

###  CaptureError

**CaptureError**: 

<a id="captureerror.code"></a>

###  code

**● code**: *`string`*

___

___
<a id="captureimageoptions"></a>

###  CaptureImageOptions

**CaptureImageOptions**: 

<a id="captureimageoptions.limit"></a>

### `<Optional>` limit

**● limit**: *`number`*

Maximum number of images to capture. This limit is not supported on iOS, only one image will be taken per invocation.

___

___
<a id="capturevideooptions"></a>

###  CaptureVideoOptions

**CaptureVideoOptions**: 

<a id="capturevideooptions.duration"></a>

### `<Optional>` duration

**● duration**: *`number`*

Maximum duration per video clip. This will be ignored on BlackBerry.

___
<a id="capturevideooptions.limit"></a>

### `<Optional>` limit

**● limit**: *`number`*

Maximum number of video clips to record. This value is ignored on iOS, only one video clip can be taken per invocation.

___
<a id="capturevideooptions.quality"></a>

### `<Optional>` quality

**● quality**: *`number`*

Quality of the video. This parameter can only be used with Android.

___

___
<a id="configurationdata"></a>

###  ConfigurationData

**ConfigurationData**: 

<a id="configurationdata.height"></a>

###  height

**● height**: *`number`*

The height of the image or video in pixels. The value is zero for sound clips.

___
<a id="configurationdata.type"></a>

###  type

**● type**: *`string`*

The ASCII-encoded lowercase string representing the media type.

___
<a id="configurationdata.width"></a>

###  width

**● width**: *`number`*

The width of the image or video in pixels. The value is zero for sound clips.

___

___
<a id="mediafile"></a>

###  MediaFile

**MediaFile**: 

<a id="mediafile.fullpath"></a>

###  fullPath

**● fullPath**: *`string`*

The full path of the file, including the name.

___
<a id="mediafile.lastmodifieddate"></a>

###  lastModifiedDate

**● lastModifiedDate**: *`Date`*

The date and time when the file was last modified.

___
<a id="mediafile.name"></a>

###  name

**● name**: *`string`*

The name of the file, without path information.

___
<a id="mediafile.size"></a>

###  size

**● size**: *`number`*

The size of the file, in bytes.

___
<a id="mediafile.type"></a>

###  type

**● type**: *`string`*

The file's mime type

___
<a id="mediafile.getformatdata"></a>

###  getFormatData

▸ **getFormatData**(successCallback: *`function`*, errorCallback?: *`function`*): `void`

Retrieves the format information of the media file.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| successCallback | `function` |  \- |
| `Optional` errorCallback | `function` |   |

**Returns:** `void`

___

___
<a id="mediafiledata"></a>

###  MediaFileData

**MediaFileData**: 

<a id="mediafiledata.bitrate"></a>

###  bitrate

**● bitrate**: *`number`*

The average bitrate of the content. The value is zero for images.

___
<a id="mediafiledata.codecs"></a>

###  codecs

**● codecs**: *`string`*

The actual format of the audio and video content.

___
<a id="mediafiledata.duration"></a>

###  duration

**● duration**: *`number`*

The length of the video or sound clip in seconds. The value is zero for images.

___
<a id="mediafiledata.height"></a>

###  height

**● height**: *`number`*

The height of the image or video in pixels. The value is zero for audio clips.

___
<a id="mediafiledata.width"></a>

###  width

**● width**: *`number`*

The width of the image or video in pixels. The value is zero for audio clips.

___

___

