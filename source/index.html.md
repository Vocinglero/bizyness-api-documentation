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

<h1 id="bizyness-api-documentation-invoice">Invoice</h1>

Managing your invoices

## get__invoices

`GET /invoices`

*Retrieve all invoices*

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "summary": {
      "type": "object",
      "properties": {
        "total": {
          "type": "object",
          "properties": {
            "size": {
              "type": "integer",
              "example": 123
            },
            "amount": {
              "type": "number",
              "example": 1203.54
            }
          }
        },
        "paid": {
          "type": "object",
          "properties": {
            "size": {
              "type": "integer",
              "example": 110
            },
            "amount": {
              "type": "number",
              "example": 1052.23
            }
          }
        },
        "unpaid": {
          "type": "object",
          "properties": {
            "size": {
              "type": "integer",
              "example": 2
            },
            "amount": {
              "type": "number",
              "example": 100
            }
          }
        },
        "overdue": {
          "type": "object",
          "properties": {
            "size": {
              "type": "integer",
              "example": 6
            },
            "amount": {
              "type": "number",
              "example": 32.3
            }
          }
        },
        "draft": {
          "type": "object",
          "properties": {
            "size": {
              "type": "integer",
              "example": 5
            },
            "amount": {
              "type": "number",
              "example": 19.01
            }
          }
        }
      }
    },
    "invoices": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "example": "5d5eca258126ab647499f9bf"
          },
          "currency": {
            "type": "string",
            "example": "EUR"
          },
          "status": {
            "type": "string",
            "enum": [
              "draft",
              "not_paid",
              "paid",
              "cancelled"
            ]
          },
          "payment_term": {
            "type": "integer",
            "example": 1
          },
          "discount_amount": {
            "type": "number",
            "example": 12.2
          },
          "discount_type": {
            "type": "string",
            "enum": [
              "percentage",
              "fixed"
            ]
          },
          "rebate": {
            "type": "number",
            "example": 10
          },
          "activity": {
            "type": "string",
            "example": "5d5efds258126ab647499f9bf"
          },
          "template": {
            "type": "string",
            "enum": [
              "basic",
              "london",
              "paris",
              "berlin"
            ]
          },
          "shipping_amount": {
            "type": "number",
            "example": 4.5
          },
          "shipping_vat": {
            "type": "number",
            "example": 20
          },
          "vat_liable": {
            "type": "boolean"
          },
          "vat_included": {
            "type": "boolean"
          },
          "client": {
            "type": "object",
            "properties": {
              "label": {
                "type": "string",
                "example": "5d5eca258126ab647499f9bf"
              },
              "identifier": {
                "type": "string",
                "example": "John Doe"
              }
            }
          },
          "billing_address": {
            "type": "object",
            "properties": {
              "last_name": {
                "type": "string",
                "example": "Doe"
              },
              "first_name": {
                "type": "string",
                "example": "John"
              },
              "company_name": {
                "type": "string",
                "example": "John's company"
              },
              "address": {
                "type": "string",
                "example": "123 rue des archives"
              },
              "address_supplement": {
                "type": "string",
                "example": "Porte gauche"
              },
              "zip": {
                "type": "string",
                "example": "A1234"
              },
              "city": {
                "type": "string",
                "example": "Paris"
              },
              "country_code": {
                "type": "string",
                "example": "FR"
              },
              "vat_number": {
                "type": "string",
                "example": "FR123456789"
              }
            }
          },
          "subject": {
            "type": "string",
            "example": "Design of the homepage"
          },
          "lines": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "sku": {
                  "type": "string",
                  "example": "AX123"
                },
                "description": {
                  "type": "string",
                  "example": "Mockup and copywriting"
                },
                "title": {
                  "type": "string",
                  "example": "Homepage design"
                },
                "type": {
                  "type": "integer",
                  "example": 0
                },
                "price": {
                  "type": "number",
                  "example": 120.32
                },
                "quantity": {
                  "type": "number",
                  "example": 1
                },
                "unit": {
                  "type": "string",
                  "enum": [
                    "piece",
                    "hour",
                    "day",
                    "meter",
                    "kilometer",
                    "kilogram",
                    "square_meter"
                  ]
                },
                "discount_amount": {
                  "type": "number",
                  "example": 10
                },
                "discount_type": {
                  "type": "string",
                  "enum": [
                    "percentage",
                    "fixed"
                  ]
                },
                "vat": {
                  "type": "number",
                  "example": 20
                },
                "origin_country": {
                  "type": "string",
                  "example": "FR"
                },
                "second_hand_good": {
                  "type": "boolean"
                }
              }
            }
          },
          "lines_groups": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "example": "Design and mockup"
                },
                "articles": {
                  "type": "array",
                  "items": {
                    "type": "integer",
                    "example": 0
                  }
                }
              }
            }
          },
          "comments": {
            "type": "string",
            "example": "Payment to be done within 3 days"
          },
          "payment_instructions_included": {
            "type": "boolean"
          },
          "payment_conditions_included": {
            "type": "boolean"
          },
          "language": {
            "type": "string",
            "enum": [
              "fr",
              "en",
              "de",
              "es",
              "it"
            ]
          },
          "vat_exemption_text": {
            "type": "string",
            "example": "Article 138 CE/2008"
          },
          "execution_date": {
            "type": "integer",
            "example": 1566493220992
          },
          "paid_date": {
            "type": "integer",
            "example": 1566493220992
          },
          "paid_method": {
            "type": "integer",
            "example": 1
          }
        }
      }
    }
  }
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return the list of invoices|[inline_response_200](#schemainline_response_200)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The specified resource was not found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey, JWTAuth
</aside>

## post__invoices

`POST /invoices`

*Create a new invoice*

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "currency": {
      "type": "string",
      "example": "EUR"
    },
    "status": {
      "type": "string",
      "enum": [
        "draft",
        "not_paid",
        "paid",
        "cancelled"
      ]
    },
    "payment_term": {
      "type": "integer",
      "example": 1
    },
    "discount_amount": {
      "type": "number",
      "example": 10
    },
    "discount_type": {
      "type": "string",
      "enum": [
        "percentage",
        "fixed"
      ]
    },
    "rebate": {
      "type": "number",
      "example": 0
    },
    "activity": {
      "type": "string",
      "example": "5d5efds258126ab647499f9bf"
    },
    "template": {
      "type": "string",
      "enum": [
        "basic",
        "london",
        "paris",
        "berlin"
      ]
    },
    "shipping_amount": {
      "type": "number",
      "example": 12.45
    },
    "shipping_vat": {
      "type": "number",
      "example": 20
    },
    "vat_liable": {
      "type": "boolean"
    },
    "vat_included": {
      "type": "boolean"
    },
    "client": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "example": "5d5eca258126ab647499f9bf"
        },
        "identifier": {
          "type": "string",
          "example": "John Doe"
        }
      }
    },
    "billing_address": {
      "type": "object",
      "properties": {
        "last_name": {
          "type": "string",
          "example": "Doe"
        },
        "first_name": {
          "type": "string",
          "example": "John"
        },
        "company_name": {
          "type": "string",
          "example": "John's company"
        },
        "address": {
          "type": "string",
          "example": "123 rue des archives"
        },
        "address_supplement": {
          "type": "string",
          "example": "Porte gauche"
        },
        "zip": {
          "type": "string",
          "example": "A1234"
        },
        "city": {
          "type": "string",
          "example": "Paris"
        },
        "country_code": {
          "type": "string",
          "example": "FR"
        },
        "vat_number": {
          "type": "string",
          "example": "FR12345678934"
        }
      }
    },
    "subject": {
      "type": "string",
      "example": "Design of the homepage"
    },
    "lines": {
      "type": "array",
      "example": [
        {
          "sku": "AX123",
          "description": "Mockup and copywriting",
          "title": "Homepage design",
          "type": 0,
          "price": 120.32,
          "quantity": 1,
          "unit": "piece",
          "discount_amount": 10,
          "discount_type": "percentage",
          "vat": 20,
          "origin_country": "FR",
          "second_hand_good": false
        },
        {
          "sku": "AX456",
          "description": "Logo with 3 colors",
          "title": "Logo design",
          "type": 0,
          "price": 59,
          "quantity": 1,
          "unit": "piece",
          "discount_amount": 0,
          "discount_type": "percentage",
          "vat": 20,
          "origin_country": "FR",
          "second_hand_good": false
        }
      ],
      "items": {
        "type": "object",
        "properties": {
          "sku": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "type": {
            "type": "integer"
          },
          "price": {
            "type": "number"
          },
          "quantity": {
            "type": "number"
          },
          "unit": {
            "type": "string",
            "enum": [
              "piece",
              "hour",
              "day",
              "meter",
              "kilometer",
              "kilogram",
              "square_meter"
            ]
          },
          "discount_amount": {
            "type": "number"
          },
          "discount_type": {
            "type": "string",
            "enum": [
              "percentage",
              "fixed"
            ]
          },
          "vat": {
            "type": "number"
          },
          "origin_country": {
            "type": "string"
          },
          "second_hand_good": {
            "type": "boolean"
          }
        }
      }
    },
    "lines_groups": {
      "type": "array",
      "example": [
        {
          "name": "Design",
          "articles": [
            0,
            1
          ]
        }
      ],
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Design and mockup"
          },
          "articles": {
            "type": "array",
            "items": {
              "type": "integer",
              "example": 0
            }
          }
        }
      }
    },
    "comments": {
      "type": "string",
      "example": "Payment to be done within 3 days"
    },
    "payment_instructions_included": {
      "type": "boolean"
    },
    "payment_conditions_included": {
      "type": "boolean"
    },
    "language": {
      "type": "string",
      "enum": [
        "fr",
        "en",
        "de",
        "es",
        "it"
      ]
    },
    "vat_exemption_text": {
      "type": "string",
      "example": "Article 138 CE/2008"
    },
    "execution_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_method": {
      "type": "integer",
      "example": 1
    }
  }
}
```

<h3 id="post__invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[invoices_body](#schemainvoices_body)|true|none|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "example": "5d5eca258126ab647499f9bf"
    },
    "currency": {
      "type": "string",
      "example": "EUR"
    },
    "status": {
      "type": "string",
      "enum": [
        "draft",
        "not_paid",
        "paid",
        "cancelled"
      ]
    },
    "payment_term": {
      "type": "integer",
      "example": 1
    },
    "discount_amount": {
      "type": "number",
      "example": 12.2
    },
    "discount_type": {
      "type": "string",
      "enum": [
        "percentage",
        "fixed"
      ]
    },
    "rebate": {
      "type": "number",
      "example": 10
    },
    "activity": {
      "type": "string",
      "example": "5d5efds258126ab647499f9bf"
    },
    "template": {
      "type": "string",
      "enum": [
        "basic",
        "london",
        "paris",
        "berlin"
      ]
    },
    "shipping_amount": {
      "type": "number",
      "example": 4.5
    },
    "shipping_vat": {
      "type": "number",
      "example": 20
    },
    "vat_liable": {
      "type": "boolean"
    },
    "vat_included": {
      "type": "boolean"
    },
    "client": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "example": "5d5eca258126ab647499f9bf"
        },
        "identifier": {
          "type": "string",
          "example": "John Doe"
        }
      }
    },
    "billing_address": {
      "type": "object",
      "properties": {
        "last_name": {
          "type": "string",
          "example": "Doe"
        },
        "first_name": {
          "type": "string",
          "example": "John"
        },
        "company_name": {
          "type": "string",
          "example": "John's company"
        },
        "address": {
          "type": "string",
          "example": "123 rue des archives"
        },
        "address_supplement": {
          "type": "string",
          "example": "Porte gauche"
        },
        "zip": {
          "type": "string",
          "example": "A1234"
        },
        "city": {
          "type": "string",
          "example": "Paris"
        },
        "country_code": {
          "type": "string",
          "example": "FR"
        },
        "vat_number": {
          "type": "string",
          "example": "FR123456789"
        }
      }
    },
    "subject": {
      "type": "string",
      "example": "Design of the homepage"
    },
    "lines": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "sku": {
            "type": "string",
            "example": "AX123"
          },
          "description": {
            "type": "string",
            "example": "Mockup and copywriting"
          },
          "title": {
            "type": "string",
            "example": "Homepage design"
          },
          "type": {
            "type": "integer",
            "example": 0
          },
          "price": {
            "type": "number",
            "example": 120.32
          },
          "quantity": {
            "type": "number",
            "example": 1
          },
          "unit": {
            "type": "string",
            "enum": [
              "piece",
              "hour",
              "day",
              "meter",
              "kilometer",
              "kilogram",
              "square_meter"
            ]
          },
          "discount_amount": {
            "type": "number",
            "example": 10
          },
          "discount_type": {
            "type": "string",
            "enum": [
              "percentage",
              "fixed"
            ]
          },
          "vat": {
            "type": "number",
            "example": 20
          },
          "origin_country": {
            "type": "string",
            "example": "FR"
          },
          "second_hand_good": {
            "type": "boolean"
          }
        }
      }
    },
    "lines_groups": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Design and mockup"
          },
          "articles": {
            "type": "array",
            "items": {
              "type": "integer",
              "example": 0
            }
          }
        }
      }
    },
    "comments": {
      "type": "string",
      "example": "Payment to be done within 3 days"
    },
    "payment_instructions_included": {
      "type": "boolean"
    },
    "payment_conditions_included": {
      "type": "boolean"
    },
    "language": {
      "type": "string",
      "enum": [
        "fr",
        "en",
        "de",
        "es",
        "it"
      ]
    },
    "vat_exemption_text": {
      "type": "string",
      "example": "Article 138 CE/2008"
    },
    "execution_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_method": {
      "type": "integer",
      "example": 1
    }
  }
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

## get__invoices_{id}_download

`GET /invoices/{id}/download`

*Download invoice PDF by ID*

<h3 id="get__invoices_{id}_download-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Invoice ID|

> Example responses

> Return the PDF file

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

<h3 id="get__invoices_{id}_download-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return the PDF file|string|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The specified resource was not found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey, JWTAuth
</aside>

## get__invoices_{id}

`GET /invoices/{id}`

*Find invoice by ID*

<h3 id="get__invoices_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Invoice ID|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "example": "5d5eca258126ab647499f9bf"
    },
    "currency": {
      "type": "string",
      "example": "EUR"
    },
    "status": {
      "type": "string",
      "enum": [
        "draft",
        "not_paid",
        "paid",
        "cancelled"
      ]
    },
    "payment_term": {
      "type": "integer",
      "example": 1
    },
    "discount_amount": {
      "type": "number",
      "example": 12.2
    },
    "discount_type": {
      "type": "string",
      "enum": [
        "percentage",
        "fixed"
      ]
    },
    "rebate": {
      "type": "number",
      "example": 10
    },
    "activity": {
      "type": "string",
      "example": "5d5efds258126ab647499f9bf"
    },
    "template": {
      "type": "string",
      "enum": [
        "basic",
        "london",
        "paris",
        "berlin"
      ]
    },
    "shipping_amount": {
      "type": "number",
      "example": 4.5
    },
    "shipping_vat": {
      "type": "number",
      "example": 20
    },
    "vat_liable": {
      "type": "boolean"
    },
    "vat_included": {
      "type": "boolean"
    },
    "client": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "example": "5d5eca258126ab647499f9bf"
        },
        "identifier": {
          "type": "string",
          "example": "John Doe"
        }
      }
    },
    "billing_address": {
      "type": "object",
      "properties": {
        "last_name": {
          "type": "string",
          "example": "Doe"
        },
        "first_name": {
          "type": "string",
          "example": "John"
        },
        "company_name": {
          "type": "string",
          "example": "John's company"
        },
        "address": {
          "type": "string",
          "example": "123 rue des archives"
        },
        "address_supplement": {
          "type": "string",
          "example": "Porte gauche"
        },
        "zip": {
          "type": "string",
          "example": "A1234"
        },
        "city": {
          "type": "string",
          "example": "Paris"
        },
        "country_code": {
          "type": "string",
          "example": "FR"
        },
        "vat_number": {
          "type": "string",
          "example": "FR123456789"
        }
      }
    },
    "subject": {
      "type": "string",
      "example": "Design of the homepage"
    },
    "lines": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "sku": {
            "type": "string",
            "example": "AX123"
          },
          "description": {
            "type": "string",
            "example": "Mockup and copywriting"
          },
          "title": {
            "type": "string",
            "example": "Homepage design"
          },
          "type": {
            "type": "integer",
            "example": 0
          },
          "price": {
            "type": "number",
            "example": 120.32
          },
          "quantity": {
            "type": "number",
            "example": 1
          },
          "unit": {
            "type": "string",
            "enum": [
              "piece",
              "hour",
              "day",
              "meter",
              "kilometer",
              "kilogram",
              "square_meter"
            ]
          },
          "discount_amount": {
            "type": "number",
            "example": 10
          },
          "discount_type": {
            "type": "string",
            "enum": [
              "percentage",
              "fixed"
            ]
          },
          "vat": {
            "type": "number",
            "example": 20
          },
          "origin_country": {
            "type": "string",
            "example": "FR"
          },
          "second_hand_good": {
            "type": "boolean"
          }
        }
      }
    },
    "lines_groups": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Design and mockup"
          },
          "articles": {
            "type": "array",
            "items": {
              "type": "integer",
              "example": 0
            }
          }
        }
      }
    },
    "comments": {
      "type": "string",
      "example": "Payment to be done within 3 days"
    },
    "payment_instructions_included": {
      "type": "boolean"
    },
    "payment_conditions_included": {
      "type": "boolean"
    },
    "language": {
      "type": "string",
      "enum": [
        "fr",
        "en",
        "de",
        "es",
        "it"
      ]
    },
    "vat_exemption_text": {
      "type": "string",
      "example": "Article 138 CE/2008"
    },
    "execution_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_method": {
      "type": "integer",
      "example": 1
    }
  }
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

<h3 id="get__invoices_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return a single invoice|[Invoice](#schemainvoice)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The specified resource was not found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey, JWTAuth
</aside>

## put__invoices_{id}

`PUT /invoices/{id}`

*Update a complete invoice*

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "example": "5d5eca258126ab647499f9bf"
    },
    "currency": {
      "type": "string",
      "example": "EUR"
    },
    "status": {
      "type": "string",
      "enum": [
        "draft",
        "not_paid",
        "paid",
        "cancelled"
      ]
    },
    "payment_term": {
      "type": "integer",
      "example": 1
    },
    "discount_amount": {
      "type": "number",
      "example": 12.2
    },
    "discount_type": {
      "type": "string",
      "enum": [
        "percentage",
        "fixed"
      ]
    },
    "rebate": {
      "type": "number",
      "example": 10
    },
    "activity": {
      "type": "string",
      "example": "5d5efds258126ab647499f9bf"
    },
    "template": {
      "type": "string",
      "enum": [
        "basic",
        "london",
        "paris",
        "berlin"
      ]
    },
    "shipping_amount": {
      "type": "number",
      "example": 4.5
    },
    "shipping_vat": {
      "type": "number",
      "example": 20
    },
    "vat_liable": {
      "type": "boolean"
    },
    "vat_included": {
      "type": "boolean"
    },
    "client": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "example": "5d5eca258126ab647499f9bf"
        },
        "identifier": {
          "type": "string",
          "example": "John Doe"
        }
      }
    },
    "billing_address": {
      "type": "object",
      "properties": {
        "last_name": {
          "type": "string",
          "example": "Doe"
        },
        "first_name": {
          "type": "string",
          "example": "John"
        },
        "company_name": {
          "type": "string",
          "example": "John's company"
        },
        "address": {
          "type": "string",
          "example": "123 rue des archives"
        },
        "address_supplement": {
          "type": "string",
          "example": "Porte gauche"
        },
        "zip": {
          "type": "string",
          "example": "A1234"
        },
        "city": {
          "type": "string",
          "example": "Paris"
        },
        "country_code": {
          "type": "string",
          "example": "FR"
        },
        "vat_number": {
          "type": "string",
          "example": "FR123456789"
        }
      }
    },
    "subject": {
      "type": "string",
      "example": "Design of the homepage"
    },
    "lines": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "sku": {
            "type": "string",
            "example": "AX123"
          },
          "description": {
            "type": "string",
            "example": "Mockup and copywriting"
          },
          "title": {
            "type": "string",
            "example": "Homepage design"
          },
          "type": {
            "type": "integer",
            "example": 0
          },
          "price": {
            "type": "number",
            "example": 120.32
          },
          "quantity": {
            "type": "number",
            "example": 1
          },
          "unit": {
            "type": "string",
            "enum": [
              "piece",
              "hour",
              "day",
              "meter",
              "kilometer",
              "kilogram",
              "square_meter"
            ]
          },
          "discount_amount": {
            "type": "number",
            "example": 10
          },
          "discount_type": {
            "type": "string",
            "enum": [
              "percentage",
              "fixed"
            ]
          },
          "vat": {
            "type": "number",
            "example": 20
          },
          "origin_country": {
            "type": "string",
            "example": "FR"
          },
          "second_hand_good": {
            "type": "boolean"
          }
        }
      }
    },
    "lines_groups": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Design and mockup"
          },
          "articles": {
            "type": "array",
            "items": {
              "type": "integer",
              "example": 0
            }
          }
        }
      }
    },
    "comments": {
      "type": "string",
      "example": "Payment to be done within 3 days"
    },
    "payment_instructions_included": {
      "type": "boolean"
    },
    "payment_conditions_included": {
      "type": "boolean"
    },
    "language": {
      "type": "string",
      "enum": [
        "fr",
        "en",
        "de",
        "es",
        "it"
      ]
    },
    "vat_exemption_text": {
      "type": "string",
      "example": "Article 138 CE/2008"
    },
    "execution_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_method": {
      "type": "integer",
      "example": 1
    }
  }
}
```

<h3 id="put__invoices_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Invoice ID|
|body|body|[Invoice](#schemainvoice)|true|none|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "example": "5d5eca258126ab647499f9bf"
    },
    "currency": {
      "type": "string",
      "example": "EUR"
    },
    "status": {
      "type": "string",
      "enum": [
        "draft",
        "not_paid",
        "paid",
        "cancelled"
      ]
    },
    "payment_term": {
      "type": "integer",
      "example": 1
    },
    "discount_amount": {
      "type": "number",
      "example": 12.2
    },
    "discount_type": {
      "type": "string",
      "enum": [
        "percentage",
        "fixed"
      ]
    },
    "rebate": {
      "type": "number",
      "example": 10
    },
    "activity": {
      "type": "string",
      "example": "5d5efds258126ab647499f9bf"
    },
    "template": {
      "type": "string",
      "enum": [
        "basic",
        "london",
        "paris",
        "berlin"
      ]
    },
    "shipping_amount": {
      "type": "number",
      "example": 4.5
    },
    "shipping_vat": {
      "type": "number",
      "example": 20
    },
    "vat_liable": {
      "type": "boolean"
    },
    "vat_included": {
      "type": "boolean"
    },
    "client": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "example": "5d5eca258126ab647499f9bf"
        },
        "identifier": {
          "type": "string",
          "example": "John Doe"
        }
      }
    },
    "billing_address": {
      "type": "object",
      "properties": {
        "last_name": {
          "type": "string",
          "example": "Doe"
        },
        "first_name": {
          "type": "string",
          "example": "John"
        },
        "company_name": {
          "type": "string",
          "example": "John's company"
        },
        "address": {
          "type": "string",
          "example": "123 rue des archives"
        },
        "address_supplement": {
          "type": "string",
          "example": "Porte gauche"
        },
        "zip": {
          "type": "string",
          "example": "A1234"
        },
        "city": {
          "type": "string",
          "example": "Paris"
        },
        "country_code": {
          "type": "string",
          "example": "FR"
        },
        "vat_number": {
          "type": "string",
          "example": "FR123456789"
        }
      }
    },
    "subject": {
      "type": "string",
      "example": "Design of the homepage"
    },
    "lines": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "sku": {
            "type": "string",
            "example": "AX123"
          },
          "description": {
            "type": "string",
            "example": "Mockup and copywriting"
          },
          "title": {
            "type": "string",
            "example": "Homepage design"
          },
          "type": {
            "type": "integer",
            "example": 0
          },
          "price": {
            "type": "number",
            "example": 120.32
          },
          "quantity": {
            "type": "number",
            "example": 1
          },
          "unit": {
            "type": "string",
            "enum": [
              "piece",
              "hour",
              "day",
              "meter",
              "kilometer",
              "kilogram",
              "square_meter"
            ]
          },
          "discount_amount": {
            "type": "number",
            "example": 10
          },
          "discount_type": {
            "type": "string",
            "enum": [
              "percentage",
              "fixed"
            ]
          },
          "vat": {
            "type": "number",
            "example": 20
          },
          "origin_country": {
            "type": "string",
            "example": "FR"
          },
          "second_hand_good": {
            "type": "boolean"
          }
        }
      }
    },
    "lines_groups": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Design and mockup"
          },
          "articles": {
            "type": "array",
            "items": {
              "type": "integer",
              "example": 0
            }
          }
        }
      }
    },
    "comments": {
      "type": "string",
      "example": "Payment to be done within 3 days"
    },
    "payment_instructions_included": {
      "type": "boolean"
    },
    "payment_conditions_included": {
      "type": "boolean"
    },
    "language": {
      "type": "string",
      "enum": [
        "fr",
        "en",
        "de",
        "es",
        "it"
      ]
    },
    "vat_exemption_text": {
      "type": "string",
      "example": "Article 138 CE/2008"
    },
    "execution_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_method": {
      "type": "integer",
      "example": 1
    }
  }
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

<h3 id="put__invoices_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Updated invoice|[Invoice](#schemainvoice)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The specified resource was not found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey, JWTAuth
</aside>

## delete__invoices_{id}

`DELETE /invoices/{id}`

*Delete invoice by ID*

<h3 id="delete__invoices_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Invoice ID|

> Example responses

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

<h3 id="delete__invoices_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|The invoice was deleted successfully|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The specified resource was not found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey, JWTAuth
</aside>

## patch__invoices_{id}

`PATCH /invoices/{id}`

*Update an invoice partially*

> Body parameter

```json
[
  {
    "op": "replace",
    "path": "/lines/0/type",
    "value": 1
  }
]
```

<h3 id="patch__invoices_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Invoice ID|
|body|body|array[any]|true|none|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "example": "5d5eca258126ab647499f9bf"
    },
    "currency": {
      "type": "string",
      "example": "EUR"
    },
    "status": {
      "type": "string",
      "enum": [
        "draft",
        "not_paid",
        "paid",
        "cancelled"
      ]
    },
    "payment_term": {
      "type": "integer",
      "example": 1
    },
    "discount_amount": {
      "type": "number",
      "example": 12.2
    },
    "discount_type": {
      "type": "string",
      "enum": [
        "percentage",
        "fixed"
      ]
    },
    "rebate": {
      "type": "number",
      "example": 10
    },
    "activity": {
      "type": "string",
      "example": "5d5efds258126ab647499f9bf"
    },
    "template": {
      "type": "string",
      "enum": [
        "basic",
        "london",
        "paris",
        "berlin"
      ]
    },
    "shipping_amount": {
      "type": "number",
      "example": 4.5
    },
    "shipping_vat": {
      "type": "number",
      "example": 20
    },
    "vat_liable": {
      "type": "boolean"
    },
    "vat_included": {
      "type": "boolean"
    },
    "client": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "example": "5d5eca258126ab647499f9bf"
        },
        "identifier": {
          "type": "string",
          "example": "John Doe"
        }
      }
    },
    "billing_address": {
      "type": "object",
      "properties": {
        "last_name": {
          "type": "string",
          "example": "Doe"
        },
        "first_name": {
          "type": "string",
          "example": "John"
        },
        "company_name": {
          "type": "string",
          "example": "John's company"
        },
        "address": {
          "type": "string",
          "example": "123 rue des archives"
        },
        "address_supplement": {
          "type": "string",
          "example": "Porte gauche"
        },
        "zip": {
          "type": "string",
          "example": "A1234"
        },
        "city": {
          "type": "string",
          "example": "Paris"
        },
        "country_code": {
          "type": "string",
          "example": "FR"
        },
        "vat_number": {
          "type": "string",
          "example": "FR123456789"
        }
      }
    },
    "subject": {
      "type": "string",
      "example": "Design of the homepage"
    },
    "lines": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "sku": {
            "type": "string",
            "example": "AX123"
          },
          "description": {
            "type": "string",
            "example": "Mockup and copywriting"
          },
          "title": {
            "type": "string",
            "example": "Homepage design"
          },
          "type": {
            "type": "integer",
            "example": 0
          },
          "price": {
            "type": "number",
            "example": 120.32
          },
          "quantity": {
            "type": "number",
            "example": 1
          },
          "unit": {
            "type": "string",
            "enum": [
              "piece",
              "hour",
              "day",
              "meter",
              "kilometer",
              "kilogram",
              "square_meter"
            ]
          },
          "discount_amount": {
            "type": "number",
            "example": 10
          },
          "discount_type": {
            "type": "string",
            "enum": [
              "percentage",
              "fixed"
            ]
          },
          "vat": {
            "type": "number",
            "example": 20
          },
          "origin_country": {
            "type": "string",
            "example": "FR"
          },
          "second_hand_good": {
            "type": "boolean"
          }
        }
      }
    },
    "lines_groups": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Design and mockup"
          },
          "articles": {
            "type": "array",
            "items": {
              "type": "integer",
              "example": 0
            }
          }
        }
      }
    },
    "comments": {
      "type": "string",
      "example": "Payment to be done within 3 days"
    },
    "payment_instructions_included": {
      "type": "boolean"
    },
    "payment_conditions_included": {
      "type": "boolean"
    },
    "language": {
      "type": "string",
      "enum": [
        "fr",
        "en",
        "de",
        "es",
        "it"
      ]
    },
    "vat_exemption_text": {
      "type": "string",
      "example": "Article 138 CE/2008"
    },
    "execution_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_method": {
      "type": "integer",
      "example": 1
    }
  }
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

<h3 id="patch__invoices_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Updated invoice|[Invoice](#schemainvoice)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The specified resource was not found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey, JWTAuth
</aside>

<h1 id="bizyness-api-documentation-article">Article</h1>

Managing your articles

## get__articles

`GET /articles`

*Retrieve all invoices*

<h3 id="get__articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyword|query|string|false|Keyword to search for|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "articles": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "example": "5d5env258126ab647499f9bf"
          },
          "manufacturer": {
            "type": "string",
            "example": "Apple"
          },
          "origin_country": {
            "type": "string",
            "example": "FR"
          },
          "price": {
            "type": "number",
            "example": 10.32
          },
          "purchase_price": {
            "type": "number",
            "example": 10.32
          },
          "sku": {
            "type": "string",
            "example": "AZ123"
          },
          "title": {
            "type": "string",
            "example": "Shirt"
          },
          "description": {
            "type": "string",
            "example": "Size M"
          },
          "vat": {
            "type": "number",
            "example": 20
          },
          "type": {
            "type": "number",
            "example": 0
          },
          "vat_included": {
            "type": "boolean"
          },
          "second_hand_good": {
            "type": "boolean"
          }
        }
      }
    }
  }
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

<h3 id="get__articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return the list of articles|[inline_response_200_2](#schemainline_response_200_2)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The specified resource was not found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey, JWTAuth
</aside>

## post__articles

`POST /articles`

*Create a new article*

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "manufacturer": {
      "type": "string"
    },
    "origin_country": {
      "type": "string"
    },
    "price": {
      "type": "number"
    },
    "purchase_price": {
      "type": "number"
    },
    "sku": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "vat": {
      "type": "number"
    },
    "type": {
      "type": "number"
    },
    "vat_included": {
      "type": "boolean"
    },
    "second_hand_good": {
      "type": "boolean"
    }
  }
}
```

<h3 id="post__articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[articles_body](#schemaarticles_body)|true|none|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "example": "5d5eca258126ab647499f9bf"
    },
    "currency": {
      "type": "string",
      "example": "EUR"
    },
    "status": {
      "type": "string",
      "enum": [
        "draft",
        "not_paid",
        "paid",
        "cancelled"
      ]
    },
    "payment_term": {
      "type": "integer",
      "example": 1
    },
    "discount_amount": {
      "type": "number",
      "example": 12.2
    },
    "discount_type": {
      "type": "string",
      "enum": [
        "percentage",
        "fixed"
      ]
    },
    "rebate": {
      "type": "number",
      "example": 10
    },
    "activity": {
      "type": "string",
      "example": "5d5efds258126ab647499f9bf"
    },
    "template": {
      "type": "string",
      "enum": [
        "basic",
        "london",
        "paris",
        "berlin"
      ]
    },
    "shipping_amount": {
      "type": "number",
      "example": 4.5
    },
    "shipping_vat": {
      "type": "number",
      "example": 20
    },
    "vat_liable": {
      "type": "boolean"
    },
    "vat_included": {
      "type": "boolean"
    },
    "client": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "example": "5d5eca258126ab647499f9bf"
        },
        "identifier": {
          "type": "string",
          "example": "John Doe"
        }
      }
    },
    "billing_address": {
      "type": "object",
      "properties": {
        "last_name": {
          "type": "string",
          "example": "Doe"
        },
        "first_name": {
          "type": "string",
          "example": "John"
        },
        "company_name": {
          "type": "string",
          "example": "John's company"
        },
        "address": {
          "type": "string",
          "example": "123 rue des archives"
        },
        "address_supplement": {
          "type": "string",
          "example": "Porte gauche"
        },
        "zip": {
          "type": "string",
          "example": "A1234"
        },
        "city": {
          "type": "string",
          "example": "Paris"
        },
        "country_code": {
          "type": "string",
          "example": "FR"
        },
        "vat_number": {
          "type": "string",
          "example": "FR123456789"
        }
      }
    },
    "subject": {
      "type": "string",
      "example": "Design of the homepage"
    },
    "lines": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "sku": {
            "type": "string",
            "example": "AX123"
          },
          "description": {
            "type": "string",
            "example": "Mockup and copywriting"
          },
          "title": {
            "type": "string",
            "example": "Homepage design"
          },
          "type": {
            "type": "integer",
            "example": 0
          },
          "price": {
            "type": "number",
            "example": 120.32
          },
          "quantity": {
            "type": "number",
            "example": 1
          },
          "unit": {
            "type": "string",
            "enum": [
              "piece",
              "hour",
              "day",
              "meter",
              "kilometer",
              "kilogram",
              "square_meter"
            ]
          },
          "discount_amount": {
            "type": "number",
            "example": 10
          },
          "discount_type": {
            "type": "string",
            "enum": [
              "percentage",
              "fixed"
            ]
          },
          "vat": {
            "type": "number",
            "example": 20
          },
          "origin_country": {
            "type": "string",
            "example": "FR"
          },
          "second_hand_good": {
            "type": "boolean"
          }
        }
      }
    },
    "lines_groups": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Design and mockup"
          },
          "articles": {
            "type": "array",
            "items": {
              "type": "integer",
              "example": 0
            }
          }
        }
      }
    },
    "comments": {
      "type": "string",
      "example": "Payment to be done within 3 days"
    },
    "payment_instructions_included": {
      "type": "boolean"
    },
    "payment_conditions_included": {
      "type": "boolean"
    },
    "language": {
      "type": "string",
      "enum": [
        "fr",
        "en",
        "de",
        "es",
        "it"
      ]
    },
    "vat_exemption_text": {
      "type": "string",
      "example": "Article 138 CE/2008"
    },
    "execution_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_method": {
      "type": "integer",
      "example": 1
    }
  }
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

<h3 id="post__articles-responses">Responses</h3>

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

## get__articles_{id}

`GET /articles/{id}`

*Find article by ID*

<h3 id="get__articles_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Article ID|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "example": "5d5env258126ab647499f9bf"
    },
    "manufacturer": {
      "type": "string",
      "example": "Apple"
    },
    "origin_country": {
      "type": "string",
      "example": "FR"
    },
    "price": {
      "type": "number",
      "example": 10.32
    },
    "purchase_price": {
      "type": "number",
      "example": 10.32
    },
    "sku": {
      "type": "string",
      "example": "AZ123"
    },
    "title": {
      "type": "string",
      "example": "Shirt"
    },
    "description": {
      "type": "string",
      "example": "Size M"
    },
    "vat": {
      "type": "number",
      "example": 20
    },
    "type": {
      "type": "number",
      "example": 0
    },
    "vat_included": {
      "type": "boolean"
    },
    "second_hand_good": {
      "type": "boolean"
    }
  }
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

<h3 id="get__articles_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return a single article|[Article](#schemaarticle)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The specified resource was not found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey, JWTAuth
</aside>

## put__articles_{id}

`PUT /articles/{id}`

*Update a complete article*

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "example": "5d5env258126ab647499f9bf"
    },
    "manufacturer": {
      "type": "string",
      "example": "Apple"
    },
    "origin_country": {
      "type": "string",
      "example": "FR"
    },
    "price": {
      "type": "number",
      "example": 10.32
    },
    "purchase_price": {
      "type": "number",
      "example": 10.32
    },
    "sku": {
      "type": "string",
      "example": "AZ123"
    },
    "title": {
      "type": "string",
      "example": "Shirt"
    },
    "description": {
      "type": "string",
      "example": "Size M"
    },
    "vat": {
      "type": "number",
      "example": 20
    },
    "type": {
      "type": "number",
      "example": 0
    },
    "vat_included": {
      "type": "boolean"
    },
    "second_hand_good": {
      "type": "boolean"
    }
  }
}
```

<h3 id="put__articles_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Article ID|
|body|body|[Article](#schemaarticle)|true|none|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "example": "5d5eca258126ab647499f9bf"
    },
    "currency": {
      "type": "string",
      "example": "EUR"
    },
    "status": {
      "type": "string",
      "enum": [
        "draft",
        "not_paid",
        "paid",
        "cancelled"
      ]
    },
    "payment_term": {
      "type": "integer",
      "example": 1
    },
    "discount_amount": {
      "type": "number",
      "example": 12.2
    },
    "discount_type": {
      "type": "string",
      "enum": [
        "percentage",
        "fixed"
      ]
    },
    "rebate": {
      "type": "number",
      "example": 10
    },
    "activity": {
      "type": "string",
      "example": "5d5efds258126ab647499f9bf"
    },
    "template": {
      "type": "string",
      "enum": [
        "basic",
        "london",
        "paris",
        "berlin"
      ]
    },
    "shipping_amount": {
      "type": "number",
      "example": 4.5
    },
    "shipping_vat": {
      "type": "number",
      "example": 20
    },
    "vat_liable": {
      "type": "boolean"
    },
    "vat_included": {
      "type": "boolean"
    },
    "client": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "example": "5d5eca258126ab647499f9bf"
        },
        "identifier": {
          "type": "string",
          "example": "John Doe"
        }
      }
    },
    "billing_address": {
      "type": "object",
      "properties": {
        "last_name": {
          "type": "string",
          "example": "Doe"
        },
        "first_name": {
          "type": "string",
          "example": "John"
        },
        "company_name": {
          "type": "string",
          "example": "John's company"
        },
        "address": {
          "type": "string",
          "example": "123 rue des archives"
        },
        "address_supplement": {
          "type": "string",
          "example": "Porte gauche"
        },
        "zip": {
          "type": "string",
          "example": "A1234"
        },
        "city": {
          "type": "string",
          "example": "Paris"
        },
        "country_code": {
          "type": "string",
          "example": "FR"
        },
        "vat_number": {
          "type": "string",
          "example": "FR123456789"
        }
      }
    },
    "subject": {
      "type": "string",
      "example": "Design of the homepage"
    },
    "lines": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "sku": {
            "type": "string",
            "example": "AX123"
          },
          "description": {
            "type": "string",
            "example": "Mockup and copywriting"
          },
          "title": {
            "type": "string",
            "example": "Homepage design"
          },
          "type": {
            "type": "integer",
            "example": 0
          },
          "price": {
            "type": "number",
            "example": 120.32
          },
          "quantity": {
            "type": "number",
            "example": 1
          },
          "unit": {
            "type": "string",
            "enum": [
              "piece",
              "hour",
              "day",
              "meter",
              "kilometer",
              "kilogram",
              "square_meter"
            ]
          },
          "discount_amount": {
            "type": "number",
            "example": 10
          },
          "discount_type": {
            "type": "string",
            "enum": [
              "percentage",
              "fixed"
            ]
          },
          "vat": {
            "type": "number",
            "example": 20
          },
          "origin_country": {
            "type": "string",
            "example": "FR"
          },
          "second_hand_good": {
            "type": "boolean"
          }
        }
      }
    },
    "lines_groups": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Design and mockup"
          },
          "articles": {
            "type": "array",
            "items": {
              "type": "integer",
              "example": 0
            }
          }
        }
      }
    },
    "comments": {
      "type": "string",
      "example": "Payment to be done within 3 days"
    },
    "payment_instructions_included": {
      "type": "boolean"
    },
    "payment_conditions_included": {
      "type": "boolean"
    },
    "language": {
      "type": "string",
      "enum": [
        "fr",
        "en",
        "de",
        "es",
        "it"
      ]
    },
    "vat_exemption_text": {
      "type": "string",
      "example": "Article 138 CE/2008"
    },
    "execution_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_method": {
      "type": "integer",
      "example": 1
    }
  }
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

<h3 id="put__articles_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Updated article|[Invoice](#schemainvoice)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The specified resource was not found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey, JWTAuth
</aside>

## delete__articles_{id}

`DELETE /articles/{id}`

*Delete article by ID*

<h3 id="delete__articles_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Article ID|

> Example responses

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

<h3 id="delete__articles_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|The article was deleted successfully|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The specified resource was not found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey, JWTAuth
</aside>

## patch__articles_{id}

`PATCH /articles/{id}`

*Update an article partially*

> Body parameter

```json
[
  {
    "op": "replace",
    "path": "/lines/0/type",
    "value": 1
  }
]
```

<h3 id="patch__articles_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Article ID|
|body|body|array[any]|true|none|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "example": "5d5env258126ab647499f9bf"
    },
    "manufacturer": {
      "type": "string",
      "example": "Apple"
    },
    "origin_country": {
      "type": "string",
      "example": "FR"
    },
    "price": {
      "type": "number",
      "example": 10.32
    },
    "purchase_price": {
      "type": "number",
      "example": 10.32
    },
    "sku": {
      "type": "string",
      "example": "AZ123"
    },
    "title": {
      "type": "string",
      "example": "Shirt"
    },
    "description": {
      "type": "string",
      "example": "Size M"
    },
    "vat": {
      "type": "number",
      "example": 20
    },
    "type": {
      "type": "number",
      "example": 0
    },
    "vat_included": {
      "type": "boolean"
    },
    "second_hand_good": {
      "type": "boolean"
    }
  }
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

<h3 id="patch__articles_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Updated article|[Article](#schemaarticle)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unauthorized|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The specified resource was not found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey, JWTAuth
</aside>

<h1 id="bizyness-api-documentation-miscellaneous">Miscellaneous</h1>

Transverval ressources

## get__countries

`GET /countries`

*Retrieve all countries*

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "countries": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "code": {
            "type": "string",
            "example": "FR"
          },
          "eu_member": {
            "type": "boolean"
          },
          "label": {
            "type": "object",
            "properties": {
              "fr": {
                "type": "string",
                "example": "France"
              },
              "en": {
                "type": "string",
                "example": "France"
              }
            }
          }
        }
      }
    }
  }
}
```

> 403 Response

```json
{
  "code": 403,
  "message": "Unauthorized"
}
```

> 500 Response

```json
{
  "code": 500,
  "message": "Internal server error"
}
```

<h3 id="get__countries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return the list of countries|[inline_response_200_1](#schemainline_response_200_1)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unauthorized|[Error](#schemaerror)|
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
  "required": [
    "code",
    "message"
  ],
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "The error message indicating what the issue is"
    },
    "code": {
      "type": "integer",
      "description": "The http status code"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|The error message indicating what the issue is|
|code|integer|true|none|The http status code|

<h2 id="tocS_JSONPatchRequestAddReplaceTest">JSONPatchRequestAddReplaceTest</h2>
<!-- backwards compatibility -->
<a id="schemajsonpatchrequestaddreplacetest"></a>
<a id="schema_JSONPatchRequestAddReplaceTest"></a>
<a id="tocSjsonpatchrequestaddreplacetest"></a>
<a id="tocsjsonpatchrequestaddreplacetest"></a>

```json
{
  "required": [
    "op",
    "path",
    "value"
  ],
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "description": "A JSON Pointer path."
    },
    "value": {
      "description": "The value to add, replace or test."
    }
  },
  "additionalProperties": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|A JSON Pointer path.|
|value|any|true|none|The value to add, replace or test.|

<h2 id="tocS_JSONPatchRequestRemove">JSONPatchRequestRemove</h2>
<!-- backwards compatibility -->
<a id="schemajsonpatchrequestremove"></a>
<a id="schema_JSONPatchRequestRemove"></a>
<a id="tocSjsonpatchrequestremove"></a>
<a id="tocsjsonpatchrequestremove"></a>

```json
{
  "required": [
    "op",
    "path"
  ],
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "description": "A JSON Pointer path."
    },
    "op": {
      "type": "string",
      "description": "The operation to perform.",
      "enum": [
        "remove"
      ]
    }
  },
  "additionalProperties": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|A JSON Pointer path.|
|op|string|true|none|The operation to perform.|

#### Enumerated Values

|Property|Value|
|---|---|
|op|remove|

<h2 id="tocS_JSONPatchRequestMoveCopy">JSONPatchRequestMoveCopy</h2>
<!-- backwards compatibility -->
<a id="schemajsonpatchrequestmovecopy"></a>
<a id="schema_JSONPatchRequestMoveCopy"></a>
<a id="tocSjsonpatchrequestmovecopy"></a>
<a id="tocsjsonpatchrequestmovecopy"></a>

```json
{
  "required": [
    "from",
    "op",
    "path"
  ],
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "description": "A JSON Pointer path."
    },
    "op": {
      "type": "string",
      "description": "The operation to perform.",
      "enum": [
        "move",
        "copy"
      ]
    }
  },
  "additionalProperties": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|A JSON Pointer path.|
|op|string|true|none|The operation to perform.|

#### Enumerated Values

|Property|Value|
|---|---|
|op|move|
|op|copy|

<h2 id="tocS_Article">Article</h2>
<!-- backwards compatibility -->
<a id="schemaarticle"></a>
<a id="schema_Article"></a>
<a id="tocSarticle"></a>
<a id="tocsarticle"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "example": "5d5env258126ab647499f9bf"
    },
    "manufacturer": {
      "type": "string",
      "example": "Apple"
    },
    "origin_country": {
      "type": "string",
      "example": "FR"
    },
    "price": {
      "type": "number",
      "example": 10.32
    },
    "purchase_price": {
      "type": "number",
      "example": 10.32
    },
    "sku": {
      "type": "string",
      "example": "AZ123"
    },
    "title": {
      "type": "string",
      "example": "Shirt"
    },
    "description": {
      "type": "string",
      "example": "Size M"
    },
    "vat": {
      "type": "number",
      "example": 20
    },
    "type": {
      "type": "number",
      "example": 0
    },
    "vat_included": {
      "type": "boolean"
    },
    "second_hand_good": {
      "type": "boolean"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|manufacturer|string|false|none|none|
|origin_country|string|false|none|none|
|price|number|false|none|none|
|purchase_price|number|false|none|none|
|sku|string|false|none|none|
|title|string|false|none|none|
|description|string|false|none|none|
|vat|number|false|none|none|
|type|number|false|none|none|
|vat_included|boolean|false|none|none|
|second_hand_good|boolean|false|none|none|

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "string",
      "example": "FR"
    },
    "eu_member": {
      "type": "boolean"
    },
    "label": {
      "type": "object",
      "properties": {
        "fr": {
          "type": "string",
          "example": "France"
        },
        "en": {
          "type": "string",
          "example": "France"
        }
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|eu_member|boolean|false|none|none|
|label|[Country_label](#schemacountry_label)|false|none|none|

<h2 id="tocS_Invoice">Invoice</h2>
<!-- backwards compatibility -->
<a id="schemainvoice"></a>
<a id="schema_Invoice"></a>
<a id="tocSinvoice"></a>
<a id="tocsinvoice"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "example": "5d5eca258126ab647499f9bf"
    },
    "currency": {
      "type": "string",
      "example": "EUR"
    },
    "status": {
      "type": "string",
      "enum": [
        "draft",
        "not_paid",
        "paid",
        "cancelled"
      ]
    },
    "payment_term": {
      "type": "integer",
      "example": 1
    },
    "discount_amount": {
      "type": "number",
      "example": 12.2
    },
    "discount_type": {
      "type": "string",
      "enum": [
        "percentage",
        "fixed"
      ]
    },
    "rebate": {
      "type": "number",
      "example": 10
    },
    "activity": {
      "type": "string",
      "example": "5d5efds258126ab647499f9bf"
    },
    "template": {
      "type": "string",
      "enum": [
        "basic",
        "london",
        "paris",
        "berlin"
      ]
    },
    "shipping_amount": {
      "type": "number",
      "example": 4.5
    },
    "shipping_vat": {
      "type": "number",
      "example": 20
    },
    "vat_liable": {
      "type": "boolean"
    },
    "vat_included": {
      "type": "boolean"
    },
    "client": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "example": "5d5eca258126ab647499f9bf"
        },
        "identifier": {
          "type": "string",
          "example": "John Doe"
        }
      }
    },
    "billing_address": {
      "type": "object",
      "properties": {
        "last_name": {
          "type": "string",
          "example": "Doe"
        },
        "first_name": {
          "type": "string",
          "example": "John"
        },
        "company_name": {
          "type": "string",
          "example": "John's company"
        },
        "address": {
          "type": "string",
          "example": "123 rue des archives"
        },
        "address_supplement": {
          "type": "string",
          "example": "Porte gauche"
        },
        "zip": {
          "type": "string",
          "example": "A1234"
        },
        "city": {
          "type": "string",
          "example": "Paris"
        },
        "country_code": {
          "type": "string",
          "example": "FR"
        },
        "vat_number": {
          "type": "string",
          "example": "FR123456789"
        }
      }
    },
    "subject": {
      "type": "string",
      "example": "Design of the homepage"
    },
    "lines": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "sku": {
            "type": "string",
            "example": "AX123"
          },
          "description": {
            "type": "string",
            "example": "Mockup and copywriting"
          },
          "title": {
            "type": "string",
            "example": "Homepage design"
          },
          "type": {
            "type": "integer",
            "example": 0
          },
          "price": {
            "type": "number",
            "example": 120.32
          },
          "quantity": {
            "type": "number",
            "example": 1
          },
          "unit": {
            "type": "string",
            "enum": [
              "piece",
              "hour",
              "day",
              "meter",
              "kilometer",
              "kilogram",
              "square_meter"
            ]
          },
          "discount_amount": {
            "type": "number",
            "example": 10
          },
          "discount_type": {
            "type": "string",
            "enum": [
              "percentage",
              "fixed"
            ]
          },
          "vat": {
            "type": "number",
            "example": 20
          },
          "origin_country": {
            "type": "string",
            "example": "FR"
          },
          "second_hand_good": {
            "type": "boolean"
          }
        }
      }
    },
    "lines_groups": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Design and mockup"
          },
          "articles": {
            "type": "array",
            "items": {
              "type": "integer",
              "example": 0
            }
          }
        }
      }
    },
    "comments": {
      "type": "string",
      "example": "Payment to be done within 3 days"
    },
    "payment_instructions_included": {
      "type": "boolean"
    },
    "payment_conditions_included": {
      "type": "boolean"
    },
    "language": {
      "type": "string",
      "enum": [
        "fr",
        "en",
        "de",
        "es",
        "it"
      ]
    },
    "vat_exemption_text": {
      "type": "string",
      "example": "Article 138 CE/2008"
    },
    "execution_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_method": {
      "type": "integer",
      "example": 1
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|currency|string|false|none|none|
|status|string|false|none|none|
|payment_term|integer|false|none|none|
|discount_amount|number|false|none|none|
|discount_type|string|false|none|none|
|rebate|number|false|none|none|
|activity|string|false|none|none|
|template|string|false|none|none|
|shipping_amount|number|false|none|none|
|shipping_vat|number|false|none|none|
|vat_liable|boolean|false|none|none|
|vat_included|boolean|false|none|none|
|client|[invoices_client](#schemainvoices_client)|false|none|none|
|billing_address|[Invoice_billing_address](#schemainvoice_billing_address)|false|none|none|
|subject|string|false|none|none|
|lines|[[Invoice_lines](#schemainvoice_lines)]|false|none|none|
|lines_groups|[[invoices_lines_groups](#schemainvoices_lines_groups)]|false|none|none|
|comments|string|false|none|none|
|payment_instructions_included|boolean|false|none|none|
|payment_conditions_included|boolean|false|none|none|
|language|string|false|none|none|
|vat_exemption_text|string|false|none|none|
|execution_date|integer|false|none|none|
|paid_date|integer|false|none|none|
|paid_method|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|not_paid|
|status|paid|
|status|cancelled|
|discount_type|percentage|
|discount_type|fixed|
|template|basic|
|template|london|
|template|paris|
|template|berlin|
|language|fr|
|language|en|
|language|de|
|language|es|
|language|it|

<h2 id="tocS_inline_response_200">inline_response_200</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200"></a>
<a id="schema_inline_response_200"></a>
<a id="tocSinline_response_200"></a>
<a id="tocsinline_response_200"></a>

```json
{
  "type": "object",
  "properties": {
    "summary": {
      "type": "object",
      "properties": {
        "total": {
          "type": "object",
          "properties": {
            "size": {
              "type": "integer",
              "example": 123
            },
            "amount": {
              "type": "number",
              "example": 1203.54
            }
          }
        },
        "paid": {
          "type": "object",
          "properties": {
            "size": {
              "type": "integer",
              "example": 110
            },
            "amount": {
              "type": "number",
              "example": 1052.23
            }
          }
        },
        "unpaid": {
          "type": "object",
          "properties": {
            "size": {
              "type": "integer",
              "example": 2
            },
            "amount": {
              "type": "number",
              "example": 100
            }
          }
        },
        "overdue": {
          "type": "object",
          "properties": {
            "size": {
              "type": "integer",
              "example": 6
            },
            "amount": {
              "type": "number",
              "example": 32.3
            }
          }
        },
        "draft": {
          "type": "object",
          "properties": {
            "size": {
              "type": "integer",
              "example": 5
            },
            "amount": {
              "type": "number",
              "example": 19.01
            }
          }
        }
      }
    },
    "invoices": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "example": "5d5eca258126ab647499f9bf"
          },
          "currency": {
            "type": "string",
            "example": "EUR"
          },
          "status": {
            "type": "string",
            "enum": [
              "draft",
              "not_paid",
              "paid",
              "cancelled"
            ]
          },
          "payment_term": {
            "type": "integer",
            "example": 1
          },
          "discount_amount": {
            "type": "number",
            "example": 12.2
          },
          "discount_type": {
            "type": "string",
            "enum": [
              "percentage",
              "fixed"
            ]
          },
          "rebate": {
            "type": "number",
            "example": 10
          },
          "activity": {
            "type": "string",
            "example": "5d5efds258126ab647499f9bf"
          },
          "template": {
            "type": "string",
            "enum": [
              "basic",
              "london",
              "paris",
              "berlin"
            ]
          },
          "shipping_amount": {
            "type": "number",
            "example": 4.5
          },
          "shipping_vat": {
            "type": "number",
            "example": 20
          },
          "vat_liable": {
            "type": "boolean"
          },
          "vat_included": {
            "type": "boolean"
          },
          "client": {
            "type": "object",
            "properties": {
              "label": {
                "type": "string",
                "example": "5d5eca258126ab647499f9bf"
              },
              "identifier": {
                "type": "string",
                "example": "John Doe"
              }
            }
          },
          "billing_address": {
            "type": "object",
            "properties": {
              "last_name": {
                "type": "string",
                "example": "Doe"
              },
              "first_name": {
                "type": "string",
                "example": "John"
              },
              "company_name": {
                "type": "string",
                "example": "John's company"
              },
              "address": {
                "type": "string",
                "example": "123 rue des archives"
              },
              "address_supplement": {
                "type": "string",
                "example": "Porte gauche"
              },
              "zip": {
                "type": "string",
                "example": "A1234"
              },
              "city": {
                "type": "string",
                "example": "Paris"
              },
              "country_code": {
                "type": "string",
                "example": "FR"
              },
              "vat_number": {
                "type": "string",
                "example": "FR123456789"
              }
            }
          },
          "subject": {
            "type": "string",
            "example": "Design of the homepage"
          },
          "lines": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "sku": {
                  "type": "string",
                  "example": "AX123"
                },
                "description": {
                  "type": "string",
                  "example": "Mockup and copywriting"
                },
                "title": {
                  "type": "string",
                  "example": "Homepage design"
                },
                "type": {
                  "type": "integer",
                  "example": 0
                },
                "price": {
                  "type": "number",
                  "example": 120.32
                },
                "quantity": {
                  "type": "number",
                  "example": 1
                },
                "unit": {
                  "type": "string",
                  "enum": [
                    "piece",
                    "hour",
                    "day",
                    "meter",
                    "kilometer",
                    "kilogram",
                    "square_meter"
                  ]
                },
                "discount_amount": {
                  "type": "number",
                  "example": 10
                },
                "discount_type": {
                  "type": "string",
                  "enum": [
                    "percentage",
                    "fixed"
                  ]
                },
                "vat": {
                  "type": "number",
                  "example": 20
                },
                "origin_country": {
                  "type": "string",
                  "example": "FR"
                },
                "second_hand_good": {
                  "type": "boolean"
                }
              }
            }
          },
          "lines_groups": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "example": "Design and mockup"
                },
                "articles": {
                  "type": "array",
                  "items": {
                    "type": "integer",
                    "example": 0
                  }
                }
              }
            }
          },
          "comments": {
            "type": "string",
            "example": "Payment to be done within 3 days"
          },
          "payment_instructions_included": {
            "type": "boolean"
          },
          "payment_conditions_included": {
            "type": "boolean"
          },
          "language": {
            "type": "string",
            "enum": [
              "fr",
              "en",
              "de",
              "es",
              "it"
            ]
          },
          "vat_exemption_text": {
            "type": "string",
            "example": "Article 138 CE/2008"
          },
          "execution_date": {
            "type": "integer",
            "example": 1566493220992
          },
          "paid_date": {
            "type": "integer",
            "example": 1566493220992
          },
          "paid_method": {
            "type": "integer",
            "example": 1
          }
        }
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|[inline_response_200_summary](#schemainline_response_200_summary)|false|none|none|
|invoices|[[Invoice](#schemainvoice)]|false|none|none|

<h2 id="tocS_invoices_client">invoices_client</h2>
<!-- backwards compatibility -->
<a id="schemainvoices_client"></a>
<a id="schema_invoices_client"></a>
<a id="tocSinvoices_client"></a>
<a id="tocsinvoices_client"></a>

```json
{
  "type": "object",
  "properties": {
    "label": {
      "type": "string",
      "example": "5d5eca258126ab647499f9bf"
    },
    "identifier": {
      "type": "string",
      "example": "John Doe"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|none|
|identifier|string|false|none|none|

<h2 id="tocS_invoices_billing_address">invoices_billing_address</h2>
<!-- backwards compatibility -->
<a id="schemainvoices_billing_address"></a>
<a id="schema_invoices_billing_address"></a>
<a id="tocSinvoices_billing_address"></a>
<a id="tocsinvoices_billing_address"></a>

```json
{
  "type": "object",
  "properties": {
    "last_name": {
      "type": "string",
      "example": "Doe"
    },
    "first_name": {
      "type": "string",
      "example": "John"
    },
    "company_name": {
      "type": "string",
      "example": "John's company"
    },
    "address": {
      "type": "string",
      "example": "123 rue des archives"
    },
    "address_supplement": {
      "type": "string",
      "example": "Porte gauche"
    },
    "zip": {
      "type": "string",
      "example": "A1234"
    },
    "city": {
      "type": "string",
      "example": "Paris"
    },
    "country_code": {
      "type": "string",
      "example": "FR"
    },
    "vat_number": {
      "type": "string",
      "example": "FR12345678934"
    }
  }
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

<h2 id="tocS_invoices_lines">invoices_lines</h2>
<!-- backwards compatibility -->
<a id="schemainvoices_lines"></a>
<a id="schema_invoices_lines"></a>
<a id="tocSinvoices_lines"></a>
<a id="tocsinvoices_lines"></a>

```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "type": {
      "type": "integer"
    },
    "price": {
      "type": "number"
    },
    "quantity": {
      "type": "number"
    },
    "unit": {
      "type": "string",
      "enum": [
        "piece",
        "hour",
        "day",
        "meter",
        "kilometer",
        "kilogram",
        "square_meter"
      ]
    },
    "discount_amount": {
      "type": "number"
    },
    "discount_type": {
      "type": "string",
      "enum": [
        "percentage",
        "fixed"
      ]
    },
    "vat": {
      "type": "number"
    },
    "origin_country": {
      "type": "string"
    },
    "second_hand_good": {
      "type": "boolean"
    }
  }
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
|discount_type|string|false|none|none|
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
|discount_type|percentage|
|discount_type|fixed|

<h2 id="tocS_invoices_lines_groups">invoices_lines_groups</h2>
<!-- backwards compatibility -->
<a id="schemainvoices_lines_groups"></a>
<a id="schema_invoices_lines_groups"></a>
<a id="tocSinvoices_lines_groups"></a>
<a id="tocsinvoices_lines_groups"></a>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "example": "Design and mockup"
    },
    "articles": {
      "type": "array",
      "items": {
        "type": "integer",
        "example": 0
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|articles|[integer]|false|none|none|

<h2 id="tocS_invoices_body">invoices_body</h2>
<!-- backwards compatibility -->
<a id="schemainvoices_body"></a>
<a id="schema_invoices_body"></a>
<a id="tocSinvoices_body"></a>
<a id="tocsinvoices_body"></a>

```json
{
  "type": "object",
  "properties": {
    "currency": {
      "type": "string",
      "example": "EUR"
    },
    "status": {
      "type": "string",
      "enum": [
        "draft",
        "not_paid",
        "paid",
        "cancelled"
      ]
    },
    "payment_term": {
      "type": "integer",
      "example": 1
    },
    "discount_amount": {
      "type": "number",
      "example": 10
    },
    "discount_type": {
      "type": "string",
      "enum": [
        "percentage",
        "fixed"
      ]
    },
    "rebate": {
      "type": "number",
      "example": 0
    },
    "activity": {
      "type": "string",
      "example": "5d5efds258126ab647499f9bf"
    },
    "template": {
      "type": "string",
      "enum": [
        "basic",
        "london",
        "paris",
        "berlin"
      ]
    },
    "shipping_amount": {
      "type": "number",
      "example": 12.45
    },
    "shipping_vat": {
      "type": "number",
      "example": 20
    },
    "vat_liable": {
      "type": "boolean"
    },
    "vat_included": {
      "type": "boolean"
    },
    "client": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "example": "5d5eca258126ab647499f9bf"
        },
        "identifier": {
          "type": "string",
          "example": "John Doe"
        }
      }
    },
    "billing_address": {
      "type": "object",
      "properties": {
        "last_name": {
          "type": "string",
          "example": "Doe"
        },
        "first_name": {
          "type": "string",
          "example": "John"
        },
        "company_name": {
          "type": "string",
          "example": "John's company"
        },
        "address": {
          "type": "string",
          "example": "123 rue des archives"
        },
        "address_supplement": {
          "type": "string",
          "example": "Porte gauche"
        },
        "zip": {
          "type": "string",
          "example": "A1234"
        },
        "city": {
          "type": "string",
          "example": "Paris"
        },
        "country_code": {
          "type": "string",
          "example": "FR"
        },
        "vat_number": {
          "type": "string",
          "example": "FR12345678934"
        }
      }
    },
    "subject": {
      "type": "string",
      "example": "Design of the homepage"
    },
    "lines": {
      "type": "array",
      "example": [
        {
          "sku": "AX123",
          "description": "Mockup and copywriting",
          "title": "Homepage design",
          "type": 0,
          "price": 120.32,
          "quantity": 1,
          "unit": "piece",
          "discount_amount": 10,
          "discount_type": "percentage",
          "vat": 20,
          "origin_country": "FR",
          "second_hand_good": false
        },
        {
          "sku": "AX456",
          "description": "Logo with 3 colors",
          "title": "Logo design",
          "type": 0,
          "price": 59,
          "quantity": 1,
          "unit": "piece",
          "discount_amount": 0,
          "discount_type": "percentage",
          "vat": 20,
          "origin_country": "FR",
          "second_hand_good": false
        }
      ],
      "items": {
        "type": "object",
        "properties": {
          "sku": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "type": {
            "type": "integer"
          },
          "price": {
            "type": "number"
          },
          "quantity": {
            "type": "number"
          },
          "unit": {
            "type": "string",
            "enum": [
              "piece",
              "hour",
              "day",
              "meter",
              "kilometer",
              "kilogram",
              "square_meter"
            ]
          },
          "discount_amount": {
            "type": "number"
          },
          "discount_type": {
            "type": "string",
            "enum": [
              "percentage",
              "fixed"
            ]
          },
          "vat": {
            "type": "number"
          },
          "origin_country": {
            "type": "string"
          },
          "second_hand_good": {
            "type": "boolean"
          }
        }
      }
    },
    "lines_groups": {
      "type": "array",
      "example": [
        {
          "name": "Design",
          "articles": [
            0,
            1
          ]
        }
      ],
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Design and mockup"
          },
          "articles": {
            "type": "array",
            "items": {
              "type": "integer",
              "example": 0
            }
          }
        }
      }
    },
    "comments": {
      "type": "string",
      "example": "Payment to be done within 3 days"
    },
    "payment_instructions_included": {
      "type": "boolean"
    },
    "payment_conditions_included": {
      "type": "boolean"
    },
    "language": {
      "type": "string",
      "enum": [
        "fr",
        "en",
        "de",
        "es",
        "it"
      ]
    },
    "vat_exemption_text": {
      "type": "string",
      "example": "Article 138 CE/2008"
    },
    "execution_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_date": {
      "type": "integer",
      "example": 1566493220992
    },
    "paid_method": {
      "type": "integer",
      "example": 1
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|status|string|false|none|none|
|payment_term|integer|false|none|none|
|discount_amount|number|false|none|none|
|discount_type|string|false|none|none|
|rebate|number|false|none|none|
|activity|string|false|none|none|
|template|string|false|none|none|
|shipping_amount|number|false|none|none|
|shipping_vat|number|false|none|none|
|vat_liable|boolean|false|none|none|
|vat_included|boolean|false|none|none|
|client|[invoices_client](#schemainvoices_client)|false|none|none|
|billing_address|[invoices_billing_address](#schemainvoices_billing_address)|false|none|none|
|subject|string|false|none|none|
|lines|[[invoices_lines](#schemainvoices_lines)]|false|none|none|
|lines_groups|[[invoices_lines_groups](#schemainvoices_lines_groups)]|false|none|none|
|comments|string|false|none|none|
|payment_instructions_included|boolean|false|none|none|
|payment_conditions_included|boolean|false|none|none|
|language|string|false|none|none|
|vat_exemption_text|string|false|none|none|
|execution_date|integer|false|none|none|
|paid_date|integer|false|none|none|
|paid_method|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|not_paid|
|status|paid|
|status|cancelled|
|discount_type|percentage|
|discount_type|fixed|
|template|basic|
|template|london|
|template|paris|
|template|berlin|
|language|fr|
|language|en|
|language|de|
|language|es|
|language|it|

<h2 id="tocS_inline_response_200_1">inline_response_200_1</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_1"></a>
<a id="schema_inline_response_200_1"></a>
<a id="tocSinline_response_200_1"></a>
<a id="tocsinline_response_200_1"></a>

```json
{
  "type": "object",
  "properties": {
    "countries": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "code": {
            "type": "string",
            "example": "FR"
          },
          "eu_member": {
            "type": "boolean"
          },
          "label": {
            "type": "object",
            "properties": {
              "fr": {
                "type": "string",
                "example": "France"
              },
              "en": {
                "type": "string",
                "example": "France"
              }
            }
          }
        }
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countries|[[Country](#schemacountry)]|false|none|none|

<h2 id="tocS_inline_response_200_2">inline_response_200_2</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_2"></a>
<a id="schema_inline_response_200_2"></a>
<a id="tocSinline_response_200_2"></a>
<a id="tocsinline_response_200_2"></a>

```json
{
  "type": "object",
  "properties": {
    "articles": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "example": "5d5env258126ab647499f9bf"
          },
          "manufacturer": {
            "type": "string",
            "example": "Apple"
          },
          "origin_country": {
            "type": "string",
            "example": "FR"
          },
          "price": {
            "type": "number",
            "example": 10.32
          },
          "purchase_price": {
            "type": "number",
            "example": 10.32
          },
          "sku": {
            "type": "string",
            "example": "AZ123"
          },
          "title": {
            "type": "string",
            "example": "Shirt"
          },
          "description": {
            "type": "string",
            "example": "Size M"
          },
          "vat": {
            "type": "number",
            "example": 20
          },
          "type": {
            "type": "number",
            "example": 0
          },
          "vat_included": {
            "type": "boolean"
          },
          "second_hand_good": {
            "type": "boolean"
          }
        }
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|articles|[[Article](#schemaarticle)]|false|none|none|

<h2 id="tocS_articles_body">articles_body</h2>
<!-- backwards compatibility -->
<a id="schemaarticles_body"></a>
<a id="schema_articles_body"></a>
<a id="tocSarticles_body"></a>
<a id="tocsarticles_body"></a>

```json
{
  "type": "object",
  "properties": {
    "manufacturer": {
      "type": "string"
    },
    "origin_country": {
      "type": "string"
    },
    "price": {
      "type": "number"
    },
    "purchase_price": {
      "type": "number"
    },
    "sku": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "vat": {
      "type": "number"
    },
    "type": {
      "type": "number"
    },
    "vat_included": {
      "type": "boolean"
    },
    "second_hand_good": {
      "type": "boolean"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manufacturer|string|false|none|none|
|origin_country|string|false|none|none|
|price|number|false|none|none|
|purchase_price|number|false|none|none|
|sku|string|false|none|none|
|title|string|false|none|none|
|description|string|false|none|none|
|vat|number|false|none|none|
|type|number|false|none|none|
|vat_included|boolean|false|none|none|
|second_hand_good|boolean|false|none|none|

<h2 id="tocS_Country_label">Country_label</h2>
<!-- backwards compatibility -->
<a id="schemacountry_label"></a>
<a id="schema_Country_label"></a>
<a id="tocScountry_label"></a>
<a id="tocscountry_label"></a>

```json
{
  "type": "object",
  "properties": {
    "fr": {
      "type": "string",
      "example": "France"
    },
    "en": {
      "type": "string",
      "example": "France"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fr|string|false|none|none|
|en|string|false|none|none|

<h2 id="tocS_Invoice_billing_address">Invoice_billing_address</h2>
<!-- backwards compatibility -->
<a id="schemainvoice_billing_address"></a>
<a id="schema_Invoice_billing_address"></a>
<a id="tocSinvoice_billing_address"></a>
<a id="tocsinvoice_billing_address"></a>

```json
{
  "type": "object",
  "properties": {
    "last_name": {
      "type": "string",
      "example": "Doe"
    },
    "first_name": {
      "type": "string",
      "example": "John"
    },
    "company_name": {
      "type": "string",
      "example": "John's company"
    },
    "address": {
      "type": "string",
      "example": "123 rue des archives"
    },
    "address_supplement": {
      "type": "string",
      "example": "Porte gauche"
    },
    "zip": {
      "type": "string",
      "example": "A1234"
    },
    "city": {
      "type": "string",
      "example": "Paris"
    },
    "country_code": {
      "type": "string",
      "example": "FR"
    },
    "vat_number": {
      "type": "string",
      "example": "FR123456789"
    }
  }
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

<h2 id="tocS_Invoice_lines">Invoice_lines</h2>
<!-- backwards compatibility -->
<a id="schemainvoice_lines"></a>
<a id="schema_Invoice_lines"></a>
<a id="tocSinvoice_lines"></a>
<a id="tocsinvoice_lines"></a>

```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string",
      "example": "AX123"
    },
    "description": {
      "type": "string",
      "example": "Mockup and copywriting"
    },
    "title": {
      "type": "string",
      "example": "Homepage design"
    },
    "type": {
      "type": "integer",
      "example": 0
    },
    "price": {
      "type": "number",
      "example": 120.32
    },
    "quantity": {
      "type": "number",
      "example": 1
    },
    "unit": {
      "type": "string",
      "enum": [
        "piece",
        "hour",
        "day",
        "meter",
        "kilometer",
        "kilogram",
        "square_meter"
      ]
    },
    "discount_amount": {
      "type": "number",
      "example": 10
    },
    "discount_type": {
      "type": "string",
      "enum": [
        "percentage",
        "fixed"
      ]
    },
    "vat": {
      "type": "number",
      "example": 20
    },
    "origin_country": {
      "type": "string",
      "example": "FR"
    },
    "second_hand_good": {
      "type": "boolean"
    }
  }
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
|discount_type|string|false|none|none|
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
|discount_type|percentage|
|discount_type|fixed|

<h2 id="tocS_inline_response_200_summary_total">inline_response_200_summary_total</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_summary_total"></a>
<a id="schema_inline_response_200_summary_total"></a>
<a id="tocSinline_response_200_summary_total"></a>
<a id="tocsinline_response_200_summary_total"></a>

```json
{
  "type": "object",
  "properties": {
    "size": {
      "type": "integer",
      "example": 123
    },
    "amount": {
      "type": "number",
      "example": 1203.54
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer|false|none|none|
|amount|number|false|none|none|

<h2 id="tocS_inline_response_200_summary_paid">inline_response_200_summary_paid</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_summary_paid"></a>
<a id="schema_inline_response_200_summary_paid"></a>
<a id="tocSinline_response_200_summary_paid"></a>
<a id="tocsinline_response_200_summary_paid"></a>

```json
{
  "type": "object",
  "properties": {
    "size": {
      "type": "integer",
      "example": 110
    },
    "amount": {
      "type": "number",
      "example": 1052.23
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer|false|none|none|
|amount|number|false|none|none|

<h2 id="tocS_inline_response_200_summary_unpaid">inline_response_200_summary_unpaid</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_summary_unpaid"></a>
<a id="schema_inline_response_200_summary_unpaid"></a>
<a id="tocSinline_response_200_summary_unpaid"></a>
<a id="tocsinline_response_200_summary_unpaid"></a>

```json
{
  "type": "object",
  "properties": {
    "size": {
      "type": "integer",
      "example": 2
    },
    "amount": {
      "type": "number",
      "example": 100
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer|false|none|none|
|amount|number|false|none|none|

<h2 id="tocS_inline_response_200_summary_overdue">inline_response_200_summary_overdue</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_summary_overdue"></a>
<a id="schema_inline_response_200_summary_overdue"></a>
<a id="tocSinline_response_200_summary_overdue"></a>
<a id="tocsinline_response_200_summary_overdue"></a>

```json
{
  "type": "object",
  "properties": {
    "size": {
      "type": "integer",
      "example": 6
    },
    "amount": {
      "type": "number",
      "example": 32.3
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer|false|none|none|
|amount|number|false|none|none|

<h2 id="tocS_inline_response_200_summary_draft">inline_response_200_summary_draft</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_summary_draft"></a>
<a id="schema_inline_response_200_summary_draft"></a>
<a id="tocSinline_response_200_summary_draft"></a>
<a id="tocsinline_response_200_summary_draft"></a>

```json
{
  "type": "object",
  "properties": {
    "size": {
      "type": "integer",
      "example": 5
    },
    "amount": {
      "type": "number",
      "example": 19.01
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer|false|none|none|
|amount|number|false|none|none|

<h2 id="tocS_inline_response_200_summary">inline_response_200_summary</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_summary"></a>
<a id="schema_inline_response_200_summary"></a>
<a id="tocSinline_response_200_summary"></a>
<a id="tocsinline_response_200_summary"></a>

```json
{
  "type": "object",
  "properties": {
    "total": {
      "type": "object",
      "properties": {
        "size": {
          "type": "integer",
          "example": 123
        },
        "amount": {
          "type": "number",
          "example": 1203.54
        }
      }
    },
    "paid": {
      "type": "object",
      "properties": {
        "size": {
          "type": "integer",
          "example": 110
        },
        "amount": {
          "type": "number",
          "example": 1052.23
        }
      }
    },
    "unpaid": {
      "type": "object",
      "properties": {
        "size": {
          "type": "integer",
          "example": 2
        },
        "amount": {
          "type": "number",
          "example": 100
        }
      }
    },
    "overdue": {
      "type": "object",
      "properties": {
        "size": {
          "type": "integer",
          "example": 6
        },
        "amount": {
          "type": "number",
          "example": 32.3
        }
      }
    },
    "draft": {
      "type": "object",
      "properties": {
        "size": {
          "type": "integer",
          "example": 5
        },
        "amount": {
          "type": "number",
          "example": 19.01
        }
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|[inline_response_200_summary_total](#schemainline_response_200_summary_total)|false|none|none|
|paid|[inline_response_200_summary_paid](#schemainline_response_200_summary_paid)|false|none|none|
|unpaid|[inline_response_200_summary_unpaid](#schemainline_response_200_summary_unpaid)|false|none|none|
|overdue|[inline_response_200_summary_overdue](#schemainline_response_200_summary_overdue)|false|none|none|
|draft|[inline_response_200_summary_draft](#schemainline_response_200_summary_draft)|false|none|none|

