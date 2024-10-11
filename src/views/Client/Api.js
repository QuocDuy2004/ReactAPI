import React from 'react'

const Api = () => {
  return (

    <div className="container-fluid">
      
      {/* Page Header Close */}
      <style dangerouslySetInnerHTML={{ __html: "\n                pre {\n                    direction: ltr;\n                    unicode-bidi: bidi-override;\n                    padding-left: 24px;\n                    padding-right: 24px;\n                    padding-top: 24px;\n                    padding-bottom: 24px;\n                    font-weight: 300;\n                    background: slategray;\n                    color: black;\n                    border-color: yellowgreen;\n                    box-shadow: firebrick;\n                    border-style: solid;\n                    border-top-left-radius: 8px;\n                    border-top-right-radius: 8px;\n                    border-bottom-left-radius: 8px;\n                    border-bottom-right-radius: 8px;\n                    border-left-width: 0px;\n                    border-right-width: 0px;\n                    border-top-width: 0px;\n                    border-bottom-width: 0px;\n                }\n            " }} />
      <div className="card">
        <div className="card-body">
          <h2 className="mb-3">API</h2>
          <div className="table-responsive mb-3">
            <table className="table">
              <tbody>
                <tr>
                  <td className="width-40">HTTP Method</td>
                  <td>POST</td>
                </tr>
                <tr>
                  <td>API URL</td>
                  <td>https://(domamin)/api/v2</td>
                </tr>
                <tr>
                  <td>API Key</td>
                  <td>
                    Truy cập <a style={{ color: 'blue' }} href="/profile">vào đây</a> để lấy key
                  </td>

                </tr>
                <tr>
                  <td>Response format</td>
                  <td>JSON</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="mb-3">Danh sách dịch vụ</h4>
          <div className="table-bg">
            <div className="table-wr ">
              <table className="table mb-3">
                <thead>
                  <tr>
                    <th className="width-40">Parameters</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>key</td>
                    <td>Your API key</td>
                  </tr>
                  <tr>
                    <td>action</td>
                    <td>services</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h6>Example response</h6>
          </div>
          <pre className=" text-light">[{"\n"}{"{"}{"\n"}"service": 1,{"\n"}"name": "Followers",{"\n"}"type": "Default",{"\n"}"category": "First Category",{"\n"}"rate": "0.90",{"\n"}"min": "50",{"\n"}"max": "10000",{"\n"}"refill": true,{"\n"}"cancel": true{"\n"}{"}"},{"\n"}{"{"}{"\n"}"service": 2,{"\n"}"name": "Comments",{"\n"}"type": "Custom Comments",{"\n"}"category": "Second Category",{"\n"}"rate": "8",{"\n"}"min": "10",{"\n"}"max": "1500",{"\n"}"refill": false,{"\n"}"cancel": true{"\n"}{"}"}{"\n"}]{"\n"}</pre>
          <h4 className="mb-3">Tạo đơn hàng</h4>
          <form className>
            <div className="form-group">
              <select className="form-control input-sm" id="service_type">
                <option value={0}>Default</option>
                <option value={2}>Custom Comments</option>
              </select>
            </div>
          </form>
          <div id="type_0" style={{}}>
            <div className="table-bg">
              <div className="table-wr ">
                <table className="table mb-3">
                  <thead>
                    <tr>
                      <th className="width-40">Parameters</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>key</td>
                      <td>Your API key</td>
                    </tr>
                    <tr>
                      <td>action</td>
                      <td>add</td>
                    </tr>
                    <tr>
                      <td>service</td>
                      <td>Service ID</td>
                    </tr>
                    <tr>
                      <td>link</td>
                      <td>Link to page</td>
                    </tr>
                    <tr>
                      <td>quantity</td>
                      <td>Needed quantity</td>
                    </tr>
                    <tr>
                      <td>runs (optional)</td>
                      <td>Runs to deliver</td>
                    </tr>
                    <tr>
                      <td>interval (optional)</td>
                      <td>Interval in minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div id="type_10" style={{ display: 'none' }}>
            <div className="table-bg">
              <div className="table-wr ">
                <table className="table mb-3">
                  <thead>
                    <tr>
                      <th className="width-40">Parameters</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>key</td>
                      <td>Your API key</td>
                    </tr>
                    <tr>
                      <td>action</td>
                      <td>add</td>
                    </tr>
                    <tr>
                      <td>service</td>
                      <td>Service ID</td>
                    </tr>
                    <tr>
                      <td>link</td>
                      <td>Link to page</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div id="type_2" style={{ display: 'none' }}>
            <div className="table-bg">
              <div className="table-wr ">
                <table className="table mb-3">
                  <thead>
                    <tr>
                      <th className="width-40">Parameters</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>key</td>
                      <td>Your API key</td>
                    </tr>
                    <tr>
                      <td>action</td>
                      <td>add</td>
                    </tr>
                    <tr>
                      <td>service</td>
                      <td>Service ID</td>
                    </tr>
                    <tr>
                      <td>link</td>
                      <td>Link to page</td>
                    </tr>
                    <tr>
                      <td>comments</td>
                      <td>Comments list separated by \r\n or \n</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div id="type_4" style={{ display: 'none' }}>
            <div className="table-bg">
              <div className="table-wr ">
                <table className="table mb-3">
                  <thead>
                    <tr>
                      <th className="width-40">Parameters</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>key</td>
                      <td>Your API key</td>
                    </tr>
                    <tr>
                      <td>action</td>
                      <td>add</td>
                    </tr>
                    <tr>
                      <td>service</td>
                      <td>Service ID</td>
                    </tr>
                    <tr>
                      <td>link</td>
                      <td>Link to page</td>
                    </tr>
                    <tr>
                      <td>usernames</td>
                      <td>Usernames list separated by \r\n or \n</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div id="type_7" style={{ display: 'none' }}>
            <div className="table-bg">
              <div className="table-wr ">
                <table className="table mb-3">
                  <thead>
                    <tr>
                      <th className="width-40">Parameters</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>key</td>
                      <td>Your API key</td>
                    </tr>
                    <tr>
                      <td>action</td>
                      <td>add</td>
                    </tr>
                    <tr>
                      <td>service</td>
                      <td>Service ID</td>
                    </tr>
                    <tr>
                      <td>link</td>
                      <td>Link to page</td>
                    </tr>
                    <tr>
                      <td>quantity</td>
                      <td>Needed quantity</td>
                    </tr>
                    <tr>
                      <td>username</td>
                      <td>URL to scrape followers from</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div id="type_100" style={{ display: 'none' }}>
            <div className="table-bg">
              <div className="table-wr ">
                <table className="table mb-3">
                  <thead>
                    <tr>
                      <th className="width-40">Parameters</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>key</td>
                      <td>Your API key</td>
                    </tr>
                    <tr>
                      <td>action</td>
                      <td>add</td>
                    </tr>
                    <tr>
                      <td>service</td>
                      <td>Service ID</td>
                    </tr>
                    <tr>
                      <td>username</td>
                      <td>Username</td>
                    </tr>
                    <tr>
                      <td>min</td>
                      <td>Quantity min</td>
                    </tr>
                    <tr>
                      <td>max</td>
                      <td>Quantity max</td>
                    </tr>
                    <tr>
                      <td>posts (optional)</td>
                      <td>Use this parameter if you want to limit the number of new (future) posts
                        that will be parsed and for which orders will be created. If posts parameter
                        is not set, the subscription will be created for
                        an unlimited number of posts.</td>
                    </tr>
                    <tr>
                      <td>old_posts (optional)</td>
                      <td>Number of existing posts that will be parsed and for which orders will be
                        created, can be used if this option is available for the service.</td>
                    </tr>
                    <tr>
                      <td>delay</td>
                      <td>Delay in minutes. Possible values: 0, 5, 10, 15, 30, 60, 90, 120, 150, 180,
                        210, 240, 270, 300, 360, 420, 480, 540, 600</td>
                    </tr>
                    <tr>
                      <td>expiry (optional)</td>
                      <td>Expiry date. Format d/m/Y</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div id="type_14" style={{ display: 'none' }}>
            <div className="table-bg">
              <div className="table-wr ">
                <table className="table mb-3">
                  <thead>
                    <tr>
                      <th className="width-40">Parameters</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>key</td>
                      <td>Your API key</td>
                    </tr>
                    <tr>
                      <td>action</td>
                      <td>add</td>
                    </tr>
                    <tr>
                      <td>service</td>
                      <td>Service ID</td>
                    </tr>
                    <tr>
                      <td>link</td>
                      <td>Link to page</td>
                    </tr>
                    <tr>
                      <td>comments</td>
                      <td>Comments list separated by \r\n or \n</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div id="type_15" style={{ display: 'none' }}>
            <div className="table-bg">
              <div className="table-wr ">
                <table className="table mb-3">
                  <thead>
                    <tr>
                      <th className="width-40">Parameters</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>key</td>
                      <td>Your API key</td>
                    </tr>
                    <tr>
                      <td>action</td>
                      <td>add</td>
                    </tr>
                    <tr>
                      <td>service</td>
                      <td>Service ID</td>
                    </tr>
                    <tr>
                      <td>link</td>
                      <td>Link to page</td>
                    </tr>
                    <tr>
                      <td>quantity</td>
                      <td>Needed quantity</td>
                    </tr>
                    <tr>
                      <td>username</td>
                      <td>Username of the comment owner</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div id="type_17" style={{ display: 'none' }}>
            <div className="table-bg">
              <div className="table-wr ">
                <table className="table mb-3">
                  <thead>
                    <tr>
                      <th className="width-40">Parameters</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>key</td>
                      <td>Your API key</td>
                    </tr>
                    <tr>
                      <td>action</td>
                      <td>add</td>
                    </tr>
                    <tr>
                      <td>service</td>
                      <td>Service ID</td>
                    </tr>
                    <tr>
                      <td>link</td>
                      <td>Link to page</td>
                    </tr>
                    <tr>
                      <td>quantity</td>
                      <td>Needed quantity</td>
                    </tr>
                    <tr>
                      <td>answer_number</td>
                      <td>Answer number of the poll</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <h6>Example response</h6>
          </div>
          <pre className=" text-light">{"{"}{"\n"}"order": 23501{"\n"}{"}"}{"\n"}</pre>
          <h4 className="mb-3">Trạng thái đơn</h4>
          <div className="table-bg">
            <div className="table-wr ">
              <table className="table mb-3">
                <thead>
                  <tr>
                    <th className="width-40">Parameters</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>key</td>
                    <td>Your API key</td>
                  </tr>
                  <tr>
                    <td>action</td>
                    <td>status</td>
                  </tr>
                  <tr>
                    <td>order</td>
                    <td>Order ID</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h6>Example response</h6>
          </div>
          <pre className=" text-light">{"{"}{"\n"}"charge": "0.27819",{"\n"}"start_count": "3572",{"\n"}"status": "Partial",{"\n"}"remains": "157",{"\n"}"currency": "USD"{"\n"}{"}"}{"\n"}</pre>
          <h4 className="mb-3">Lấy nhiều đơn cùng lúc</h4>
          <div className="table-bg">
            <div className="table-wr ">
              <table className="table mb-3">
                <thead>
                  <tr>
                    <th className="width-40">Parameters</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>key</td>
                    <td>Your API key</td>
                  </tr>
                  <tr>
                    <td>action</td>
                    <td>status</td>
                  </tr>
                  <tr>
                    <td>orders</td>
                    <td>Order IDs (separated by a comma, up to 100 IDs)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h6>Example response</h6>
          </div>
          <pre className=" text-light">{"{"}{"\n"}"1": {"{"}{"\n"}"charge": "0.27819",{"\n"}"start_count": "3572",{"\n"}"status": "Partial",{"\n"}"remains": "157",{"\n"}"currency": "USD"{"\n"}{"}"},{"\n"}"10": {"{"}{"\n"}"error": "Incorrect order ID"{"\n"}{"}"},{"\n"}"100": {"{"}{"\n"}"charge": "1.44219",{"\n"}"start_count": "234",{"\n"}"status": "In progress",{"\n"}"remains": "10",{"\n"}"currency": "USD"{"\n"}{"}"}{"\n"}{"}"}{"\n"}</pre>
          <h4 className="mb-3">Create refill</h4>
          <div className="table-bg">
            <div className="table-wr ">
              <table className="table mb-3">
                <thead>
                  <tr>
                    <th className="width-40">Parameters</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>key</td>
                    <td>Your API key</td>
                  </tr>
                  <tr>
                    <td>action</td>
                    <td>refill</td>
                  </tr>
                  <tr>
                    <td>order</td>
                    <td>Order ID</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h6>Example response</h6>
          </div>
          <pre className=" text-light">{"{"}{"\n"}"refill": "1"{"\n"}{"}"}{"\n"}</pre>
          <h4 className="mb-3">Create multiple refill</h4>
          <div className="table-bg">
            <div className="table-wr ">
              <table className="table mb-3">
                <thead>
                  <tr>
                    <th className="width-40">Parameters</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>key</td>
                    <td>Your API key</td>
                  </tr>
                  <tr>
                    <td>action</td>
                    <td>refill</td>
                  </tr>
                  <tr>
                    <td>orders</td>
                    <td>Order IDs (separated by a comma, up to 100 IDs)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h6>Example response</h6>
          </div>
          <pre className=" text-light">[{"\n"}{"{"}{"\n"}{"  "}"order": 1,{"\n"}{"  "}"refill": 1{"\n"}{"}"},{"\n"}{"{"}{"\n"}{"  "}"order": 2,{"\n"}{"  "}"refill": 2{"\n"}{"}"},{"\n"}{"{"}{"\n"}"order": 3,{"\n"}"refill": {"{"}{"\n"}{"    "}"error": "Incorrect order ID"{"\n"}{"  "}{"}"}{"\n"}{"}"}{"\n"}]{"\n"}</pre>
          <h4 className="mb-3">Get refill status</h4>
          <div className="table-bg">
            <div className="table-wr ">
              <table className="table mb-3">
                <thead>
                  <tr>
                    <th className="width-40">Parameters</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>key</td>
                    <td>Your API key</td>
                  </tr>
                  <tr>
                    <td>action</td>
                    <td>refill_status</td>
                  </tr>
                  <tr>
                    <td>refill</td>
                    <td>Refill ID</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h6>Example response</h6>
          </div>
          <pre className=" text-light">{"{"}{"\n"}"status": "Completed"{"\n"}{"}"}{"\n"}</pre>
          <h4 className="mb-3">Get multiple refill status</h4>
          <div className="table-bg">
            <div className="table-wr ">
              <table className="table mb-3">
                <thead>
                  <tr>
                    <th className="width-40">Parameters</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>key</td>
                    <td>Your API key</td>
                  </tr>
                  <tr>
                    <td>action</td>
                    <td>refill_status</td>
                  </tr>
                  <tr>
                    <td>refills</td>
                    <td>Refill IDs (separated by a comma, up to 100 IDs)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h6>Example response</h6>
          </div>
          <pre className=" text-light">[{"\n"}{"{"}{"\n"}"refill": 1,{"\n"}"status": "Completed"{"\n"}{"}"},{"\n"}{"{"}{"\n"}"refill": 2,{"\n"}"status": "Rejected"{"\n"}{"}"},{"\n"}{"{"}{"\n"}"refill": 3,{"\n"}"status": {"{"}{"\n"}{"    "}"error": "Refill not found"{"\n"}{"  "}{"}"}{"\n"}{"}"}{"\n"}]{"\n"}</pre>
          <h4 className="mb-3">Create cancel</h4>
          <div className="table-bg">
            <div className="table-wr ">
              <table className="table mb-3">
                <thead>
                  <tr>
                    <th className="width-40">Parameters</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>key</td>
                    <td>Your API key</td>
                  </tr>
                  <tr>
                    <td>action</td>
                    <td>cancel</td>
                  </tr>
                  <tr>
                    <td>orders</td>
                    <td>Order IDs (separated by a comma, up to 100 IDs)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h6>Example response</h6>
          </div>
          <pre className=" text-light">[{"\n"}{"{"}{"\n"}"order": 9,{"\n"}"cancel": {"{"}{"\n"}{"    "}"error": "Incorrect order ID"{"\n"}{"  "}{"}"}{"\n"}{"}"},{"\n"}{"{"}{"\n"}{"  "}"order": 2,{"\n"}{"  "}"cancel": 1{"\n"}{"}"}{"\n"}]{"\n"}</pre>
          <h4 className="mb-3">User balance</h4>
          <div className="table-bg">
            <div className="table-wr ">
              <table className="table mb-3">
                <thead>
                  <tr>
                    <th className="width-40">Parameters</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>key</td>
                    <td>Your API key</td>
                  </tr>
                  <tr>
                    <td>action</td>
                    <td>balance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h6>Example response</h6>
          </div>
          <pre className=" text-light">{"{"}{"\n"}"balance": "100.84292",{"\n"}"currency": "USD"{"\n"}{"}"}{"\n"}</pre>
          <a href="/example.txt" className="btn btn-big-secondary" target="_blank">Example of PHP code</a>
        </div>
      </div>
    </div>


  )
}
export default Api