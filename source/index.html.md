---
title: Swagger Petstore - OpenAPI 3.0 v1.0.11
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers:
  - <a href="http://swagger.io">Find out more about Swagger</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="swagger-petstore-openapi-3-0">Swagger Petstore - OpenAPI 3.0 v1.0.11</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

_If you're looking for the Sgdfdfwagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)

Base URLs:

* <a href="https://petstore3.swagger.io/api/v3">https://petstore3.swagger.io/api/v3</a>

<a href="http://swagger.io/terms/">Terms of service</a>
Email: <a href="mailto:apiteam@swagger.io">Support</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

# Authentication

- oAuth2 authentication. 

    - Flow: implicit
    - Authorization URL = [https://petstore3.swagger.io/oauth/authorize](https://petstore3.swagger.io/oauth/authorize)

|Scope|Scope Description|
|---|---|
|write:pets|modify pets in your account|
|read:pets|read your pets|

* API Key (api_key)
    - Parameter Name: **api_key**, in: header. 

<h1 id="swagger-petstore-openapi-3-0-pet">pet</h1>

Everything about your Pets

<a href="http://swagger.io">Find out more</a>

## updatePet

<a id="opIdupdatePet"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://petstore3.swagger.io/api/v3/pet \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT https://petstore3.swagger.io/api/v3/pet HTTP/1.1
Host: petstore3.swagger.io
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 10,
  "name": "doggie",
  "category": {
    "id": 1,
    "name": "Dogs"
  },
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://petstore3.swagger.io/api/v3/pet',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.put 'https://petstore3.swagger.io/api/v3/pet',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.put('https://petstore3.swagger.io/api/v3/pet', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','https://petstore3.swagger.io/api/v3/pet', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/pet");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://petstore3.swagger.io/api/v3/pet", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /pet`

*Update an existing pet*

Update an existing pet by Id

> Body parameter

```json
{
  "id": 10,
  "name": "doggie",
  "category": {
    "id": 1,
    "name": "Dogs"
  },
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

```yaml
id: 10
name: doggie
category:
  id: 1
  name: Dogs
photoUrls:
  - string
tags:
  - id: 0
    name: string
status: available

```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<pet>
  <id>10</id>
  <name>doggie</name>
  <category>
    <id>1</id>
    <name>Dogs</name>
  </category>
  <photoUrls>string</photoUrls>
  <tags>
    <id>0</id>
    <name>string</name>
  </tags>
  <status>available</status>
</pet>
```

<h3 id="updatepet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Pet](#schemapet)|true|Update an existent pet in the store|

> Example responses

> 200 Response

```json
{
  "id": 10,
  "name": "doggie",
  "category": {
    "id": 1,
    "name": "Dogs"
  },
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<pet>
  <id>10</id>
  <name>doggie</name>
  <category>
    <id>1</id>
    <name>Dogs</name>
  </category>
  <photoUrls>string</photoUrls>
  <tags>
    <id>0</id>
    <name>string</name>
  </tags>
  <status>available</status>
</pet>
```

<h3 id="updatepet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[Pet](#schemapet)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pet not found|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Validation exception|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## addPet

<a id="opIdaddPet"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://petstore3.swagger.io/api/v3/pet \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://petstore3.swagger.io/api/v3/pet HTTP/1.1
Host: petstore3.swagger.io
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 10,
  "name": "doggie",
  "category": {
    "id": 1,
    "name": "Dogs"
  },
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://petstore3.swagger.io/api/v3/pet',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://petstore3.swagger.io/api/v3/pet',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://petstore3.swagger.io/api/v3/pet', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://petstore3.swagger.io/api/v3/pet', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/pet");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://petstore3.swagger.io/api/v3/pet", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /pet`

*Add a new pet to the store*

Add a new pet to the store

> Body parameter

```json
{
  "id": 10,
  "name": "doggie",
  "category": {
    "id": 1,
    "name": "Dogs"
  },
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

```yaml
id: 10
name: doggie
category:
  id: 1
  name: Dogs
photoUrls:
  - string
tags:
  - id: 0
    name: string
status: available

```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<pet>
  <id>10</id>
  <name>doggie</name>
  <category>
    <id>1</id>
    <name>Dogs</name>
  </category>
  <photoUrls>string</photoUrls>
  <tags>
    <id>0</id>
    <name>string</name>
  </tags>
  <status>available</status>
</pet>
```

<h3 id="addpet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Pet](#schemapet)|true|Create a new pet in the store|

> Example responses

> 200 Response

```json
{
  "id": 10,
  "name": "doggie",
  "category": {
    "id": 1,
    "name": "Dogs"
  },
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<pet>
  <id>10</id>
  <name>doggie</name>
  <category>
    <id>1</id>
    <name>Dogs</name>
  </category>
  <photoUrls>string</photoUrls>
  <tags>
    <id>0</id>
    <name>string</name>
  </tags>
  <status>available</status>
</pet>
```

<h3 id="addpet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[Pet](#schemapet)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Invalid input|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## findPetsByStatus

<a id="opIdfindPetsByStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://petstore3.swagger.io/api/v3/pet/findByStatus \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://petstore3.swagger.io/api/v3/pet/findByStatus HTTP/1.1
Host: petstore3.swagger.io
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://petstore3.swagger.io/api/v3/pet/findByStatus',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://petstore3.swagger.io/api/v3/pet/findByStatus',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://petstore3.swagger.io/api/v3/pet/findByStatus', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://petstore3.swagger.io/api/v3/pet/findByStatus', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/pet/findByStatus");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://petstore3.swagger.io/api/v3/pet/findByStatus", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pet/findByStatus`

*Finds Pets by status*

Multiple status values can be provided with comma separated strings

<h3 id="findpetsbystatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|Status values that need to be considered for filter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|

> Example responses

> 200 Response

```json
[
  {
    "id": 10,
    "name": "doggie",
    "category": {
      "id": 1,
      "name": "Dogs"
    },
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  }
]
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<id>10</id>
<name>doggie</name>
<category>
  <id>1</id>
  <name>Dogs</name>
</category>
<photoUrls>string</photoUrls>
<tags>
  <id>0</id>
  <name>string</name>
</tags>
<status>available</status>
```

<h3 id="findpetsbystatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid status value|None|

<h3 id="findpetsbystatus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Pet](#schemapet)]|false|none|none|
|» id|integer(int64)|false|none|none|
|» name|string|true|none|none|
|» category|[Category](#schemacategory)|false|none|none|
|»» id|integer(int64)|false|none|none|
|»» name|string|false|none|none|
|» photoUrls|[string]|true|none|none|
|» tags|[[Tag](#schematag)]|false|none|none|
|»» id|integer(int64)|false|none|none|
|»» name|string|false|none|none|
|» status|string|false|none|pet status in the store|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## findPetsByTags

<a id="opIdfindPetsByTags"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://petstore3.swagger.io/api/v3/pet/findByTags \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET https://petstore3.swagger.io/api/v3/pet/findByTags HTTP/1.1
Host: petstore3.swagger.io
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://petstore3.swagger.io/api/v3/pet/findByTags',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://petstore3.swagger.io/api/v3/pet/findByTags',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://petstore3.swagger.io/api/v3/pet/findByTags', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://petstore3.swagger.io/api/v3/pet/findByTags', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/pet/findByTags");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://petstore3.swagger.io/api/v3/pet/findByTags", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pet/findByTags`

*Finds Pets by tags*

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

<h3 id="findpetsbytags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tags|query|array[string]|false|Tags to filter by|

> Example responses

> 200 Response

```json
[
  {
    "id": 10,
    "name": "doggie",
    "category": {
      "id": 1,
      "name": "Dogs"
    },
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  }
]
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<id>10</id>
<name>doggie</name>
<category>
  <id>1</id>
  <name>Dogs</name>
</category>
<photoUrls>string</photoUrls>
<tags>
  <id>0</id>
  <name>string</name>
</tags>
<status>available</status>
```

<h3 id="findpetsbytags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid tag value|None|

<h3 id="findpetsbytags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Pet](#schemapet)]|false|none|none|
|» id|integer(int64)|false|none|none|
|» name|string|true|none|none|
|» category|[Category](#schemacategory)|false|none|none|
|»» id|integer(int64)|false|none|none|
|»» name|string|false|none|none|
|» photoUrls|[string]|true|none|none|
|» tags|[[Tag](#schematag)]|false|none|none|
|»» id|integer(int64)|false|none|none|
|»» name|string|false|none|none|
|» status|string|false|none|pet status in the store|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## getPetById

<a id="opIdgetPetById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://petstore3.swagger.io/api/v3/pet/{petId} \
  -H 'Accept: application/json' \
  -H 'api_key: API_KEY'

```

```http
GET https://petstore3.swagger.io/api/v3/pet/{petId} HTTP/1.1
Host: petstore3.swagger.io
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'api_key':'API_KEY'
};

fetch('https://petstore3.swagger.io/api/v3/pet/{petId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'api_key' => 'API_KEY'
}

result = RestClient.get 'https://petstore3.swagger.io/api/v3/pet/{petId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'api_key': 'API_KEY'
}

r = requests.get('https://petstore3.swagger.io/api/v3/pet/{petId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'api_key' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://petstore3.swagger.io/api/v3/pet/{petId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/pet/{petId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "api_key": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://petstore3.swagger.io/api/v3/pet/{petId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pet/{petId}`

*Find pet by ID*

Returns a single pet

<h3 id="getpetbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|petId|path|integer(int64)|true|ID of pet to return|

> Example responses

> 200 Response

```json
{
  "id": 10,
  "name": "doggie",
  "category": {
    "id": 1,
    "name": "Dogs"
  },
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<pet>
  <id>10</id>
  <name>doggie</name>
  <category>
    <id>1</id>
    <name>Dogs</name>
  </category>
  <photoUrls>string</photoUrls>
  <tags>
    <id>0</id>
    <name>string</name>
  </tags>
  <status>available</status>
</pet>
```

<h3 id="getpetbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[Pet](#schemapet)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pet not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, petstore_auth ( Scopes: write:pets read:pets )
</aside>

## updatePetWithForm

<a id="opIdupdatePetWithForm"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://petstore3.swagger.io/api/v3/pet/{petId} \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://petstore3.swagger.io/api/v3/pet/{petId} HTTP/1.1
Host: petstore3.swagger.io

```

```javascript

const headers = {
  'Authorization':'Bearer {access-token}'
};

fetch('https://petstore3.swagger.io/api/v3/pet/{petId}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://petstore3.swagger.io/api/v3/pet/{petId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://petstore3.swagger.io/api/v3/pet/{petId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://petstore3.swagger.io/api/v3/pet/{petId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/pet/{petId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://petstore3.swagger.io/api/v3/pet/{petId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /pet/{petId}`

*Updates a pet in the store with form data*

<h3 id="updatepetwithform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|petId|path|integer(int64)|true|ID of pet that needs to be updated|
|name|query|string|false|Name of pet that needs to be updated|
|status|query|string|false|Status of pet that needs to be updated|

<h3 id="updatepetwithform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Invalid input|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## deletePet

<a id="opIddeletePet"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://petstore3.swagger.io/api/v3/pet/{petId} \
  -H 'api_key: string' \
  -H 'Authorization: Bearer {access-token}'

```

```http
DELETE https://petstore3.swagger.io/api/v3/pet/{petId} HTTP/1.1
Host: petstore3.swagger.io

api_key: string

```

```javascript

const headers = {
  'api_key':'string',
  'Authorization':'Bearer {access-token}'
};

fetch('https://petstore3.swagger.io/api/v3/pet/{petId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'api_key' => 'string',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete 'https://petstore3.swagger.io/api/v3/pet/{petId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'api_key': 'string',
  'Authorization': 'Bearer {access-token}'
}

r = requests.delete('https://petstore3.swagger.io/api/v3/pet/{petId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'api_key' => 'string',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://petstore3.swagger.io/api/v3/pet/{petId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/pet/{petId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "api_key": []string{"string"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://petstore3.swagger.io/api/v3/pet/{petId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /pet/{petId}`

*Deletes a pet*

delete a pet

<h3 id="deletepet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|header|string|false|none|
|petId|path|integer(int64)|true|Pet id to delete|

<h3 id="deletepet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid pet value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## uploadFile

<a id="opIduploadFile"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://petstore3.swagger.io/api/v3/pet/{petId}/uploadImage \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST https://petstore3.swagger.io/api/v3/pet/{petId}/uploadImage HTTP/1.1
Host: petstore3.swagger.io
Content-Type: application/octet-stream
Accept: application/json

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'application/octet-stream',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('https://petstore3.swagger.io/api/v3/pet/{petId}/uploadImage',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/octet-stream',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://petstore3.swagger.io/api/v3/pet/{petId}/uploadImage',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/octet-stream',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://petstore3.swagger.io/api/v3/pet/{petId}/uploadImage', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/octet-stream',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://petstore3.swagger.io/api/v3/pet/{petId}/uploadImage', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/pet/{petId}/uploadImage");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/octet-stream"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://petstore3.swagger.io/api/v3/pet/{petId}/uploadImage", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /pet/{petId}/uploadImage`

*uploads an image*

> Body parameter

```yaml
string

```

<h3 id="uploadfile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|petId|path|integer(int64)|true|ID of pet to update|
|additionalMetadata|query|string|false|Additional Metadata|
|body|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "type": "string",
  "message": "string"
}
```

<h3 id="uploadfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

<h1 id="swagger-petstore-openapi-3-0-store">store</h1>

Access to Petstore orders

<a href="http://swagger.io">Find out more about our store</a>

## getInventory

<a id="opIdgetInventory"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://petstore3.swagger.io/api/v3/store/inventory \
  -H 'Accept: application/json' \
  -H 'api_key: API_KEY'

```

```http
GET https://petstore3.swagger.io/api/v3/store/inventory HTTP/1.1
Host: petstore3.swagger.io
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'api_key':'API_KEY'
};

fetch('https://petstore3.swagger.io/api/v3/store/inventory',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'api_key' => 'API_KEY'
}

result = RestClient.get 'https://petstore3.swagger.io/api/v3/store/inventory',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'api_key': 'API_KEY'
}

r = requests.get('https://petstore3.swagger.io/api/v3/store/inventory', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'api_key' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://petstore3.swagger.io/api/v3/store/inventory', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/store/inventory");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "api_key": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://petstore3.swagger.io/api/v3/store/inventory", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /store/inventory`

*Returns pet inventories by status*

Returns a map of status codes to quantities

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="getinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getinventory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» **additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## placeOrder

<a id="opIdplaceOrder"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://petstore3.swagger.io/api/v3/store/order \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST https://petstore3.swagger.io/api/v3/store/order HTTP/1.1
Host: petstore3.swagger.io
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 10,
  "petId": 198772,
  "quantity": 7,
  "shipDate": "2019-08-24T14:15:22Z",
  "status": "approved",
  "complete": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://petstore3.swagger.io/api/v3/store/order',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://petstore3.swagger.io/api/v3/store/order',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://petstore3.swagger.io/api/v3/store/order', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://petstore3.swagger.io/api/v3/store/order', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/store/order");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://petstore3.swagger.io/api/v3/store/order", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /store/order`

*Place an order for a pet*

Place a new order in the store

> Body parameter

```json
{
  "id": 10,
  "petId": 198772,
  "quantity": 7,
  "shipDate": "2019-08-24T14:15:22Z",
  "status": "approved",
  "complete": true
}
```

```yaml
id: 10
petId: 198772
quantity: 7
shipDate: 2019-08-24T14:15:22Z
status: approved
complete: true

```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<order>
  <id>10</id>
  <petId>198772</petId>
  <quantity>7</quantity>
  <shipDate>2019-08-24T14:15:22Z</shipDate>
  <status>approved</status>
  <complete>true</complete>
</order>
```

<h3 id="placeorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Order](#schemaorder)|false|none|

> Example responses

> 200 Response

```json
{
  "id": 10,
  "petId": 198772,
  "quantity": 7,
  "shipDate": "2019-08-24T14:15:22Z",
  "status": "approved",
  "complete": true
}
```

<h3 id="placeorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[Order](#schemaorder)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Invalid input|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrderById

<a id="opIdgetOrderById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://petstore3.swagger.io/api/v3/store/order/{orderId} \
  -H 'Accept: application/json'

```

```http
GET https://petstore3.swagger.io/api/v3/store/order/{orderId} HTTP/1.1
Host: petstore3.swagger.io
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://petstore3.swagger.io/api/v3/store/order/{orderId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://petstore3.swagger.io/api/v3/store/order/{orderId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://petstore3.swagger.io/api/v3/store/order/{orderId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://petstore3.swagger.io/api/v3/store/order/{orderId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/store/order/{orderId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://petstore3.swagger.io/api/v3/store/order/{orderId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /store/order/{orderId}`

*Find purchase order by ID*

For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.

<h3 id="getorderbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|path|integer(int64)|true|ID of order that needs to be fetched|

> Example responses

> 200 Response

```json
{
  "id": 10,
  "petId": 198772,
  "quantity": 7,
  "shipDate": "2019-08-24T14:15:22Z",
  "status": "approved",
  "complete": true
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<order>
  <id>10</id>
  <petId>198772</petId>
  <quantity>7</quantity>
  <shipDate>2019-08-24T14:15:22Z</shipDate>
  <status>approved</status>
  <complete>true</complete>
</order>
```

<h3 id="getorderbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[Order](#schemaorder)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Order not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrder

<a id="opIddeleteOrder"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://petstore3.swagger.io/api/v3/store/order/{orderId}

```

```http
DELETE https://petstore3.swagger.io/api/v3/store/order/{orderId} HTTP/1.1
Host: petstore3.swagger.io

```

```javascript

fetch('https://petstore3.swagger.io/api/v3/store/order/{orderId}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete 'https://petstore3.swagger.io/api/v3/store/order/{orderId}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('https://petstore3.swagger.io/api/v3/store/order/{orderId}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://petstore3.swagger.io/api/v3/store/order/{orderId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/store/order/{orderId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://petstore3.swagger.io/api/v3/store/order/{orderId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /store/order/{orderId}`

*Delete purchase order by ID*

For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors

<h3 id="deleteorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|path|integer(int64)|true|ID of the order that needs to be deleted|

<h3 id="deleteorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Order not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="swagger-petstore-openapi-3-0-user">user</h1>

Operations about user

## createUser

<a id="opIdcreateUser"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://petstore3.swagger.io/api/v3/user \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST https://petstore3.swagger.io/api/v3/user HTTP/1.1
Host: petstore3.swagger.io
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 10,
  "username": "theUser",
  "firstName": "John",
  "lastName": "James",
  "email": "john@email.com",
  "password": "12345",
  "phone": "12345",
  "userStatus": 1
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://petstore3.swagger.io/api/v3/user',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://petstore3.swagger.io/api/v3/user',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://petstore3.swagger.io/api/v3/user', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://petstore3.swagger.io/api/v3/user', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/user");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://petstore3.swagger.io/api/v3/user", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /user`

*Create user*

This can only be done by the logged in user.

> Body parameter

```json
{
  "id": 10,
  "username": "theUser",
  "firstName": "John",
  "lastName": "James",
  "email": "john@email.com",
  "password": "12345",
  "phone": "12345",
  "userStatus": 1
}
```

```yaml
id: 10
username: theUser
firstName: John
lastName: James
email: john@email.com
password: "12345"
phone: "12345"
userStatus: 1

```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<user>
  <id>10</id>
  <username>theUser</username>
  <firstName>John</firstName>
  <lastName>James</lastName>
  <email>john@email.com</email>
  <password>12345</password>
  <phone>12345</phone>
  <userStatus>1</userStatus>
</user>
```

<h3 id="createuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[User](#schemauser)|false|Created user object|

> Example responses

> default Response

```json
{
  "id": 10,
  "username": "theUser",
  "firstName": "John",
  "lastName": "James",
  "email": "john@email.com",
  "password": "12345",
  "phone": "12345",
  "userStatus": 1
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<user>
  <id>10</id>
  <username>theUser</username>
  <firstName>John</firstName>
  <lastName>James</lastName>
  <email>john@email.com</email>
  <password>12345</password>
  <phone>12345</phone>
  <userStatus>1</userStatus>
</user>
```

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|[User](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## createUsersWithListInput

<a id="opIdcreateUsersWithListInput"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://petstore3.swagger.io/api/v3/user/createWithList \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST https://petstore3.swagger.io/api/v3/user/createWithList HTTP/1.1
Host: petstore3.swagger.io
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '[
  {
    "id": 10,
    "username": "theUser",
    "firstName": "John",
    "lastName": "James",
    "email": "john@email.com",
    "password": "12345",
    "phone": "12345",
    "userStatus": 1
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://petstore3.swagger.io/api/v3/user/createWithList',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://petstore3.swagger.io/api/v3/user/createWithList',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://petstore3.swagger.io/api/v3/user/createWithList', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://petstore3.swagger.io/api/v3/user/createWithList', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/user/createWithList");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://petstore3.swagger.io/api/v3/user/createWithList", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /user/createWithList`

*Creates list of users with given input array*

Creates list of users with given input array

> Body parameter

```json
[
  {
    "id": 10,
    "username": "theUser",
    "firstName": "John",
    "lastName": "James",
    "email": "john@email.com",
    "password": "12345",
    "phone": "12345",
    "userStatus": 1
  }
]
```

<h3 id="createuserswithlistinput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[User](#schemauser)|false|none|

> Example responses

> 200 Response

```json
{
  "id": 10,
  "username": "theUser",
  "firstName": "John",
  "lastName": "James",
  "email": "john@email.com",
  "password": "12345",
  "phone": "12345",
  "userStatus": 1
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<user>
  <id>10</id>
  <username>theUser</username>
  <firstName>John</firstName>
  <lastName>James</lastName>
  <email>john@email.com</email>
  <password>12345</password>
  <phone>12345</phone>
  <userStatus>1</userStatus>
</user>
```

<h3 id="createuserswithlistinput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[User](#schemauser)|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## loginUser

<a id="opIdloginUser"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://petstore3.swagger.io/api/v3/user/login \
  -H 'Accept: application/xml'

```

```http
GET https://petstore3.swagger.io/api/v3/user/login HTTP/1.1
Host: petstore3.swagger.io
Accept: application/xml

```

```javascript

const headers = {
  'Accept':'application/xml'
};

fetch('https://petstore3.swagger.io/api/v3/user/login',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml'
}

result = RestClient.get 'https://petstore3.swagger.io/api/v3/user/login',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/xml'
}

r = requests.get('https://petstore3.swagger.io/api/v3/user/login', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/xml',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://petstore3.swagger.io/api/v3/user/login', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/user/login");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/xml"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://petstore3.swagger.io/api/v3/user/login", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /user/login`

*Logs user into the system*

<h3 id="loginuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|query|string|false|The user name for login|
|password|query|string|false|The password for login in clear text|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="loginuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|string|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid username/password supplied|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Rate-Limit|integer|int32|calls per hour allowed by the user|
|200|X-Expires-After|string|date-time|date in UTC when token expires|

<aside class="success">
This operation does not require authentication
</aside>

## logoutUser

<a id="opIdlogoutUser"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://petstore3.swagger.io/api/v3/user/logout

```

```http
GET https://petstore3.swagger.io/api/v3/user/logout HTTP/1.1
Host: petstore3.swagger.io

```

```javascript

fetch('https://petstore3.swagger.io/api/v3/user/logout',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'https://petstore3.swagger.io/api/v3/user/logout',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('https://petstore3.swagger.io/api/v3/user/logout')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://petstore3.swagger.io/api/v3/user/logout', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/user/logout");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://petstore3.swagger.io/api/v3/user/logout", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /user/logout`

*Logs out current logged in user session*

<h3 id="logoutuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUserByName

<a id="opIdgetUserByName"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://petstore3.swagger.io/api/v3/user/{username} \
  -H 'Accept: application/json'

```

```http
GET https://petstore3.swagger.io/api/v3/user/{username} HTTP/1.1
Host: petstore3.swagger.io
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://petstore3.swagger.io/api/v3/user/{username}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://petstore3.swagger.io/api/v3/user/{username}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://petstore3.swagger.io/api/v3/user/{username}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://petstore3.swagger.io/api/v3/user/{username}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/user/{username}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://petstore3.swagger.io/api/v3/user/{username}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /user/{username}`

*Get user by user name*

<h3 id="getuserbyname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The name that needs to be fetched. Use user1 for testing. |

> Example responses

> 200 Response

```json
{
  "id": 10,
  "username": "theUser",
  "firstName": "John",
  "lastName": "James",
  "email": "john@email.com",
  "password": "12345",
  "phone": "12345",
  "userStatus": 1
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<user>
  <id>10</id>
  <username>theUser</username>
  <firstName>John</firstName>
  <lastName>James</lastName>
  <email>john@email.com</email>
  <password>12345</password>
  <phone>12345</phone>
  <userStatus>1</userStatus>
</user>
```

<h3 id="getuserbyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[User](#schemauser)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid username supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateUser

<a id="opIdupdateUser"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://petstore3.swagger.io/api/v3/user/{username} \
  -H 'Content-Type: application/json'

```

```http
PUT https://petstore3.swagger.io/api/v3/user/{username} HTTP/1.1
Host: petstore3.swagger.io
Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": 10,
  "username": "theUser",
  "firstName": "John",
  "lastName": "James",
  "email": "john@email.com",
  "password": "12345",
  "phone": "12345",
  "userStatus": 1
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('https://petstore3.swagger.io/api/v3/user/{username}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put 'https://petstore3.swagger.io/api/v3/user/{username}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('https://petstore3.swagger.io/api/v3/user/{username}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','https://petstore3.swagger.io/api/v3/user/{username}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/user/{username}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://petstore3.swagger.io/api/v3/user/{username}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /user/{username}`

*Update user*

This can only be done by the logged in user.

> Body parameter

```json
{
  "id": 10,
  "username": "theUser",
  "firstName": "John",
  "lastName": "James",
  "email": "john@email.com",
  "password": "12345",
  "phone": "12345",
  "userStatus": 1
}
```

```yaml
id: 10
username: theUser
firstName: John
lastName: James
email: john@email.com
password: "12345"
phone: "12345"
userStatus: 1

```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<user>
  <id>10</id>
  <username>theUser</username>
  <firstName>John</firstName>
  <lastName>James</lastName>
  <email>john@email.com</email>
  <password>12345</password>
  <phone>12345</phone>
  <userStatus>1</userStatus>
</user>
```

<h3 id="updateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|name that need to be deleted|
|body|body|[User](#schemauser)|false|Update an existent user in the store|

<h3 id="updateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteUser

<a id="opIddeleteUser"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://petstore3.swagger.io/api/v3/user/{username}

```

```http
DELETE https://petstore3.swagger.io/api/v3/user/{username} HTTP/1.1
Host: petstore3.swagger.io

```

```javascript

fetch('https://petstore3.swagger.io/api/v3/user/{username}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete 'https://petstore3.swagger.io/api/v3/user/{username}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('https://petstore3.swagger.io/api/v3/user/{username}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://petstore3.swagger.io/api/v3/user/{username}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://petstore3.swagger.io/api/v3/user/{username}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://petstore3.swagger.io/api/v3/user/{username}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /user/{username}`

*Delete user*

This can only be done by the logged in user.

<h3 id="deleteuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The name that needs to be deleted|

<h3 id="deleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid username supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "id": 10,
  "petId": 198772,
  "quantity": 7,
  "shipDate": "2019-08-24T14:15:22Z",
  "status": "approved",
  "complete": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|petId|integer(int64)|false|none|none|
|quantity|integer(int32)|false|none|none|
|shipDate|string(date-time)|false|none|none|
|status|string|false|none|Order Status|
|complete|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|placed|
|status|approved|
|status|delivered|

<h2 id="tocS_Customer">Customer</h2>
<!-- backwards compatibility -->
<a id="schemacustomer"></a>
<a id="schema_Customer"></a>
<a id="tocScustomer"></a>
<a id="tocscustomer"></a>

```json
{
  "id": 100000,
  "username": "fehguy",
  "address": [
    {
      "street": "437 Lytton",
      "city": "Palo Alto",
      "state": "CA",
      "zip": "94301"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|username|string|false|none|none|
|address|[[Address](#schemaaddress)]|false|none|none|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "street": "437 Lytton",
  "city": "Palo Alto",
  "state": "CA",
  "zip": "94301"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|street|string|false|none|none|
|city|string|false|none|none|
|state|string|false|none|none|
|zip|string|false|none|none|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "id": 1,
  "name": "Dogs"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": 10,
  "username": "theUser",
  "firstName": "John",
  "lastName": "James",
  "email": "john@email.com",
  "password": "12345",
  "phone": "12345",
  "userStatus": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|username|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|email|string|false|none|none|
|password|string|false|none|none|
|phone|string|false|none|none|
|userStatus|integer(int32)|false|none|User Status|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "id": 0,
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Pet">Pet</h2>
<!-- backwards compatibility -->
<a id="schemapet"></a>
<a id="schema_Pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>

```json
{
  "id": 10,
  "name": "doggie",
  "category": {
    "id": 1,
    "name": "Dogs"
  },
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|true|none|none|
|category|[Category](#schemacategory)|false|none|none|
|photoUrls|[string]|true|none|none|
|tags|[[Tag](#schematag)]|false|none|none|
|status|string|false|none|pet status in the store|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|

<h2 id="tocS_ApiResponse">ApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse"></a>
<a id="schema_ApiResponse"></a>
<a id="tocSapiresponse"></a>
<a id="tocsapiresponse"></a>

```json
{
  "code": 0,
  "type": "string",
  "message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|type|string|false|none|none|
|message|string|false|none|none|

