---
title: Bizyness API Documentation v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="bizyness-api-documentation">Bizyness API Documentation v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Bizyness is an accounting software that helps entrepreneurs to manage their activities with ease.

# Introduction
This API provides endpoints to manage the data in your Bizyness account.

# Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
And that allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

# Authentication

Bizyness offers two forms of authentication:
- API Key
- JWT Token

<SecurityDefinitions />

Base URLs:

* <a href="https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0">https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0</a>

* <a href="https://api.bizyness.fr">https://api.bizyness.fr</a>

# Authentication

* API Key (ApiKey)
    - Parameter Name: **X-Api-Key**, in: header. 

- HTTP Authentication, scheme: bearer 

<h1 id="bizyness-api-documentation-default">Default</h1>

## get__invoices

> Code samples

```shell
# You can also use wget
curl -X GET https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```http
GET https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices HTTP/1.1
Host: virtserver.swaggerhub.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'
};

fetch('https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices',
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
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Api-Key' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices', array(
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
URL obj = new URL("https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices");
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
        "X-Api-Key": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /invoices`

*Get all invoices*

> Example responses

> 200 Response

```json
{
  "summary": {
    "total": {
      "size": 12,
      "amount": 124.54
    },
    "paid": {
      "size": 12,
      "amount": 124.54
    },
    "unpaid": {
      "size": 12,
      "amount": 124.54
    },
    "overdue": {
      "size": 12,
      "amount": 124.54
    },
    "draft": {
      "size": 12,
      "amount": 124.54
    }
  },
  "invoices": [
    {
      "id": "61b4927f8c63f77be57f347f",
      "currency": "EUR",
      "status": "draft",
      "payment_term": 1,
      "discount_amount": 12.2,
      "discount_type": "percentage",
      "rebate": 10,
      "activity": "619ef5288c63f70f45e1a418",
      "template": "basic",
      "shipping_amount": 4.5,
      "shipping_vat": 20,
      "vat_liable": true,
      "vat_included": true,
      "client": {
        "label": "Pierre Dupont",
        "identifier": "61b4927f8c63f77be57f347f"
      },
      "billing_address": {
        "last_name": "Dupont",
        "first_name": "Pierre",
        "company_name": "Little Doe Company",
        "address": "123 rue des noisetiers",
        "address_supplement": "2eme etage porte droite",
        "zip": "75016",
        "city": "Paris",
        "country_code": "FR",
        "vat_number": "FR123456789"
      },
      "subject": "Commande 1234",
      "lines": [
        {
          "sku": "AK123",
          "description": "Or 18 carats - taille M",
          "title": "Bracelet femme London",
          "type": 0,
          "price": 152.21,
          "quantity": 1,
          "unit": "piece",
          "discount_amount": 12.2,
          "discount_type": "percentage",
          "vat": 20,
          "origin_country": "FR",
          "second_hand_good": true
        }
      ],
      "lines_groups": [
        {
          "name": "Accessoires",
          "articles": [
            0
          ]
        }
      ],
      "comments": "Merci de votre confiance",
      "payment_instructions_included": true,
      "payment_conditions_included": true,
      "language": "fr",
      "vat_exemption_text": "TVA non applicable",
      "execution_date": 1672614000000,
      "paid_date": 1652614000000,
      "paid_method": 1
    }
  ]
}
```

> 403 Response

```json
{
  "code": 403,
  "message": "Unauthorized"
}
```

> 404 Response

```json
{
  "code": 404,
  "message": "Resource not found"
}
```

> 500 Response

```json
{
  "code": 500,
  "message": "Internal server error"
}
```

<h3 id="get__invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Invoices of the Bizyness account|[InvoiceList](#schemainvoicelist)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The specified resource was not found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey, JWTAuth
</aside>

## post__invoices

> Code samples

```shell
# You can also use wget
curl -X POST https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```http
POST https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices HTTP/1.1
Host: virtserver.swaggerhub.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'
};

fetch('https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices',
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
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.post 'https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.post('https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Api-Key' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices', array(
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
URL obj = new URL("https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices");
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
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://virtserver.swaggerhub.com/lpb/bizyness-api/1.0.0/invoices", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /invoices`

*Create an invoice*

> Example responses

> 200 Response

```json
{
  "id": "61b4927f8c63f77be57f347f",
  "currency": "EUR",
  "status": "draft",
  "payment_term": 1,
  "discount_amount": 12.2,
  "discount_type": "percentage",
  "rebate": 10,
  "activity": "619ef5288c63f70f45e1a418",
  "template": "basic",
  "shipping_amount": 4.5,
  "shipping_vat": 20,
  "vat_liable": true,
  "vat_included": true,
  "client": {
    "label": "Pierre Dupont",
    "identifier": "61b4927f8c63f77be57f347f"
  },
  "billing_address": {
    "last_name": "Dupont",
    "first_name": "Pierre",
    "company_name": "Little Doe Company",
    "address": "123 rue des noisetiers",
    "address_supplement": "2eme etage porte droite",
    "zip": "75016",
    "city": "Paris",
    "country_code": "FR",
    "vat_number": "FR123456789"
  },
  "subject": "Commande 1234",
  "lines": [
    {
      "sku": "AK123",
      "description": "Or 18 carats - taille M",
      "title": "Bracelet femme London",
      "type": 0,
      "price": 152.21,
      "quantity": 1,
      "unit": "piece",
      "discount_amount": 12.2,
      "discount_type": "percentage",
      "vat": 20,
      "origin_country": "FR",
      "second_hand_good": true
    }
  ],
  "lines_groups": [
    {
      "name": "Accessoires",
      "articles": [
        0
      ]
    }
  ],
  "comments": "Merci de votre confiance",
  "payment_instructions_included": true,
  "payment_conditions_included": true,
  "language": "fr",
  "vat_exemption_text": "TVA non applicable",
  "execution_date": 1672614000000,
  "paid_date": 1652614000000,
  "paid_method": 1
}
```

> 403 Response

```json
{
  "code": 403,
  "message": "Unauthorized"
}
```

> 404 Response

```json
{
  "code": 404,
  "message": "Resource not found"
}
```

> 500 Response

```json
{
  "code": 500,
  "message": "Internal server error"
}
```

<h3 id="post__invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Created invoice|[Invoice](#schemainvoice)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The specified resource was not found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey, JWTAuth
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "string",
  "code": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|The error message indicating what the issue is|
|code|integer|true|none|The http status code|

<h2 id="tocS_ExternalReference">ExternalReference</h2>
<!-- backwards compatibility -->
<a id="schemaexternalreference"></a>
<a id="schema_ExternalReference"></a>
<a id="tocSexternalreference"></a>
<a id="tocsexternalreference"></a>

```json
{
  "label": "Pierre Dupont",
  "identifier": "61b4927f8c63f77be57f347f"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|identifier|string|true|none|none|

<h2 id="tocS_CollectionId">CollectionId</h2>
<!-- backwards compatibility -->
<a id="schemacollectionid"></a>
<a id="schema_CollectionId"></a>
<a id="tocScollectionid"></a>
<a id="tocscollectionid"></a>

```json
"61b4927f8c63f77be57f347f"

```

The unique identifier of a collection item

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The unique identifier of a collection item|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "last_name": "Dupont",
  "first_name": "Pierre",
  "company_name": "Little Doe Company",
  "address": "123 rue des noisetiers",
  "address_supplement": "2eme etage porte droite",
  "zip": "75016",
  "city": "Paris",
  "country_code": "FR",
  "vat_number": "FR123456789"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last_name|string|false|none|none|
|first_name|string|false|none|none|
|company_name|string|false|none|none|
|address|string|false|none|none|
|address_supplement|string|false|none|none|
|zip|string|false|none|none|
|city|string|false|none|none|
|country_code|string|false|none|none|
|vat_number|string|false|none|none|

<h2 id="tocS_InvoiceLine">InvoiceLine</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceline"></a>
<a id="schema_InvoiceLine"></a>
<a id="tocSinvoiceline"></a>
<a id="tocsinvoiceline"></a>

```json
{
  "sku": "AK123",
  "description": "Or 18 carats - taille M",
  "title": "Bracelet femme London",
  "type": 0,
  "price": 152.21,
  "quantity": 1,
  "unit": "piece",
  "discount_amount": 12.2,
  "discount_type": "percentage",
  "vat": 20,
  "origin_country": "FR",
  "second_hand_good": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sku|string|false|none|none|
|description|string|false|none|none|
|title|string|false|none|none|
|type|integer|false|none|none|
|price|number|false|none|none|
|quantity|number|false|none|none|
|unit|string|false|none|none|
|discount_amount|number|false|none|none|
|discount_type|[DiscountType](#schemadiscounttype)|false|none|The type of discount|
|vat|number|false|none|none|
|origin_country|string|false|none|none|
|second_hand_good|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|unit|piece|
|unit|hour|
|unit|day|
|unit|meter|
|unit|kilometer|
|unit|kilogram|
|unit|square_meter|

<h2 id="tocS_InvoiceLineGroup">InvoiceLineGroup</h2>
<!-- backwards compatibility -->
<a id="schemainvoicelinegroup"></a>
<a id="schema_InvoiceLineGroup"></a>
<a id="tocSinvoicelinegroup"></a>
<a id="tocsinvoicelinegroup"></a>

```json
{
  "name": "Accessoires",
  "articles": [
    0
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|articles|[integer]|false|none|none|

<h2 id="tocS_InvoiceList">InvoiceList</h2>
<!-- backwards compatibility -->
<a id="schemainvoicelist"></a>
<a id="schema_InvoiceList"></a>
<a id="tocSinvoicelist"></a>
<a id="tocsinvoicelist"></a>

```json
{
  "summary": {
    "total": {
      "size": 12,
      "amount": 124.54
    },
    "paid": {
      "size": 12,
      "amount": 124.54
    },
    "unpaid": {
      "size": 12,
      "amount": 124.54
    },
    "overdue": {
      "size": 12,
      "amount": 124.54
    },
    "draft": {
      "size": 12,
      "amount": 124.54
    }
  },
  "invoices": [
    {
      "id": "61b4927f8c63f77be57f347f",
      "currency": "EUR",
      "status": "draft",
      "payment_term": 1,
      "discount_amount": 12.2,
      "discount_type": "percentage",
      "rebate": 10,
      "activity": "619ef5288c63f70f45e1a418",
      "template": "basic",
      "shipping_amount": 4.5,
      "shipping_vat": 20,
      "vat_liable": true,
      "vat_included": true,
      "client": {
        "label": "Pierre Dupont",
        "identifier": "61b4927f8c63f77be57f347f"
      },
      "billing_address": {
        "last_name": "Dupont",
        "first_name": "Pierre",
        "company_name": "Little Doe Company",
        "address": "123 rue des noisetiers",
        "address_supplement": "2eme etage porte droite",
        "zip": "75016",
        "city": "Paris",
        "country_code": "FR",
        "vat_number": "FR123456789"
      },
      "subject": "Commande 1234",
      "lines": [
        {
          "sku": "AK123",
          "description": "Or 18 carats - taille M",
          "title": "Bracelet femme London",
          "type": 0,
          "price": 152.21,
          "quantity": 1,
          "unit": "piece",
          "discount_amount": 12.2,
          "discount_type": "percentage",
          "vat": 20,
          "origin_country": "FR",
          "second_hand_good": true
        }
      ],
      "lines_groups": [
        {
          "name": "Accessoires",
          "articles": [
            0
          ]
        }
      ],
      "comments": "Merci de votre confiance",
      "payment_instructions_included": true,
      "payment_conditions_included": true,
      "language": "fr",
      "vat_exemption_text": "TVA non applicable",
      "execution_date": 1672614000000,
      "paid_date": 1652614000000,
      "paid_method": 1
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|[InvoiceList_summary](#schemainvoicelist_summary)|false|none|none|
|invoices|[[Invoice](#schemainvoice)]|false|none|none|

<h2 id="tocS_SummaryListItem">SummaryListItem</h2>
<!-- backwards compatibility -->
<a id="schemasummarylistitem"></a>
<a id="schema_SummaryListItem"></a>
<a id="tocSsummarylistitem"></a>
<a id="tocssummarylistitem"></a>

```json
{
  "size": 12,
  "amount": 124.54
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer|false|none|none|
|amount|number|false|none|none|

<h2 id="tocS_DiscountType">DiscountType</h2>
<!-- backwards compatibility -->
<a id="schemadiscounttype"></a>
<a id="schema_DiscountType"></a>
<a id="tocSdiscounttype"></a>
<a id="tocsdiscounttype"></a>

```json
"percentage"

```

The type of discount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The type of discount|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|percentage|
|*anonymous*|fixed|

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
"fr"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|fr|
|*anonymous*|en|
|*anonymous*|de|
|*anonymous*|es|
|*anonymous*|it|

<h2 id="tocS_BillOfSale">BillOfSale</h2>
<!-- backwards compatibility -->
<a id="schemabillofsale"></a>
<a id="schema_BillOfSale"></a>
<a id="tocSbillofsale"></a>
<a id="tocsbillofsale"></a>

```json
{
  "id": "61b4927f8c63f77be57f347f",
  "currency": "EUR",
  "status": "draft",
  "payment_term": 1,
  "discount_amount": 12.2,
  "discount_type": "percentage",
  "rebate": 10,
  "activity": "619ef5288c63f70f45e1a418",
  "template": "basic",
  "shipping_amount": 4.5,
  "shipping_vat": 20,
  "vat_liable": true,
  "vat_included": true,
  "client": {
    "label": "Pierre Dupont",
    "identifier": "61b4927f8c63f77be57f347f"
  },
  "billing_address": {
    "last_name": "Dupont",
    "first_name": "Pierre",
    "company_name": "Little Doe Company",
    "address": "123 rue des noisetiers",
    "address_supplement": "2eme etage porte droite",
    "zip": "75016",
    "city": "Paris",
    "country_code": "FR",
    "vat_number": "FR123456789"
  },
  "subject": "Commande 1234",
  "lines": [
    {
      "sku": "AK123",
      "description": "Or 18 carats - taille M",
      "title": "Bracelet femme London",
      "type": 0,
      "price": 152.21,
      "quantity": 1,
      "unit": "piece",
      "discount_amount": 12.2,
      "discount_type": "percentage",
      "vat": 20,
      "origin_country": "FR",
      "second_hand_good": true
    }
  ],
  "lines_groups": [
    {
      "name": "Accessoires",
      "articles": [
        0
      ]
    }
  ],
  "comments": "Merci de votre confiance",
  "payment_instructions_included": true,
  "payment_conditions_included": true,
  "language": "fr",
  "vat_exemption_text": "TVA non applicable"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[CollectionId](#schemacollectionid)|false|none|The unique identifier of a collection item|
|currency|string|false|none|none|
|status|string|false|none|none|
|payment_term|integer|false|none|none|
|discount_amount|number|false|none|none|
|discount_type|[DiscountType](#schemadiscounttype)|false|none|The type of discount|
|rebate|number|false|none|none|
|activity|string|false|none|none|
|template|string|false|none|none|
|shipping_amount|number|false|none|none|
|shipping_vat|number|false|none|none|
|vat_liable|boolean|false|none|none|
|vat_included|boolean|false|none|none|
|client|[ExternalReference](#schemaexternalreference)|false|none|none|
|billing_address|[Address](#schemaaddress)|false|none|none|
|subject|string|false|none|none|
|lines|[[InvoiceLine](#schemainvoiceline)]|false|none|none|
|lines_groups|[[InvoiceLineGroup](#schemainvoicelinegroup)]|false|none|none|
|comments|string|false|none|none|
|payment_instructions_included|boolean|false|none|none|
|payment_conditions_included|boolean|false|none|none|
|language|[Language](#schemalanguage)|false|none|none|
|vat_exemption_text|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|not_paid|
|status|paid|
|status|cancelled|
|template|basic|
|template|london|
|template|paris|
|template|berlin|

<h2 id="tocS_Invoice">Invoice</h2>
<!-- backwards compatibility -->
<a id="schemainvoice"></a>
<a id="schema_Invoice"></a>
<a id="tocSinvoice"></a>
<a id="tocsinvoice"></a>

```json
{
  "id": "61b4927f8c63f77be57f347f",
  "currency": "EUR",
  "status": "draft",
  "payment_term": 1,
  "discount_amount": 12.2,
  "discount_type": "percentage",
  "rebate": 10,
  "activity": "619ef5288c63f70f45e1a418",
  "template": "basic",
  "shipping_amount": 4.5,
  "shipping_vat": 20,
  "vat_liable": true,
  "vat_included": true,
  "client": {
    "label": "Pierre Dupont",
    "identifier": "61b4927f8c63f77be57f347f"
  },
  "billing_address": {
    "last_name": "Dupont",
    "first_name": "Pierre",
    "company_name": "Little Doe Company",
    "address": "123 rue des noisetiers",
    "address_supplement": "2eme etage porte droite",
    "zip": "75016",
    "city": "Paris",
    "country_code": "FR",
    "vat_number": "FR123456789"
  },
  "subject": "Commande 1234",
  "lines": [
    {
      "sku": "AK123",
      "description": "Or 18 carats - taille M",
      "title": "Bracelet femme London",
      "type": 0,
      "price": 152.21,
      "quantity": 1,
      "unit": "piece",
      "discount_amount": 12.2,
      "discount_type": "percentage",
      "vat": 20,
      "origin_country": "FR",
      "second_hand_good": true
    }
  ],
  "lines_groups": [
    {
      "name": "Accessoires",
      "articles": [
        0
      ]
    }
  ],
  "comments": "Merci de votre confiance",
  "payment_instructions_included": true,
  "payment_conditions_included": true,
  "language": "fr",
  "vat_exemption_text": "TVA non applicable",
  "execution_date": 1672614000000,
  "paid_date": 1652614000000,
  "paid_method": 1
}

```

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[BillOfSale](#schemabillofsale)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» execution_date|integer|false|none|none|
|» paid_date|integer|false|none|none|
|» paid_method|integer|false|none|none|

<h2 id="tocS_InvoiceList_summary">InvoiceList_summary</h2>
<!-- backwards compatibility -->
<a id="schemainvoicelist_summary"></a>
<a id="schema_InvoiceList_summary"></a>
<a id="tocSinvoicelist_summary"></a>
<a id="tocsinvoicelist_summary"></a>

```json
{
  "total": {
    "size": 12,
    "amount": 124.54
  },
  "paid": {
    "size": 12,
    "amount": 124.54
  },
  "unpaid": {
    "size": 12,
    "amount": 124.54
  },
  "overdue": {
    "size": 12,
    "amount": 124.54
  },
  "draft": {
    "size": 12,
    "amount": 124.54
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|[SummaryListItem](#schemasummarylistitem)|false|none|none|
|paid|[SummaryListItem](#schemasummarylistitem)|false|none|none|
|unpaid|[SummaryListItem](#schemasummarylistitem)|false|none|none|
|overdue|[SummaryListItem](#schemasummarylistitem)|false|none|none|
|draft|[SummaryListItem](#schemasummarylistitem)|false|none|none|

