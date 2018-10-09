# status-aggregator

Aggregates multiple upstream status endpoints into a single status endpoint. Allows to health check an AWS EC2 instance w/ multiple services via a single target group.

## Configuration

Takes stringified JSON config of the following format via `STATUS_AGGREGATOR_CONFIG` environmental variable:

```json
{
    "upstreamUrls": [
        "http://nginx1",
        "http://nginx2"
    ]
}
```

## API

```
GET /status
```

* returns HTTP 200 when:
    * no upstream status URLs are configured
    * all the upstream status checks return HTTP 200
* returns HTTP 503 otherwise, i.e. a single upstream status check failure fails the aggregate status check
