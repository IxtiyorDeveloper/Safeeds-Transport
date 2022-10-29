function Template(props) {

    const tfunc = (props) => {
        return (
            `<!DOCTYPE html>
                <html>
                <head>
                    <title>Page Title</title>
                </head>
                <body>
                <div style="background-color:#e4e5e7;border-top: 1px solid #cccccc; border-bottom: 1px solid 1px solid #cccccc">
                    <table cellPadding="0" cellSpacing="0"
                           style="border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"
                           width="100%">
                        <tbody>
                        <tr style="border-collapse:collapse">
                            <td style="padding:0;Margin:0" valign="top">
                                <table align="center" cellPadding="0" cellSpacing="0"
                                       style="border-collapse:collapse;border-spacing:0px;table-layout:fixed!important;width:100%">
                                    <tbody>
                                    <tr style="border-collapse:collapse">
                                        <td align="center" style="padding:0;Margin:0">
                                            <table align="center" bgcolor="#ffffff" cellPadding="0" cellSpacing="0"
                                                   style="border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px">
                                                <tbody>
                                                    <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:left top">
                                                        <table cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px"
                                                               width="100%">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:560px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="center"
                                                                                style="padding:0;Margin:0;padding-bottom:15px">
                                                                                <table border="0" cellPadding="0"
                                                                                       cellSpacing="0" height="100%"
                                                                                       role="presentation"
                                                                                       style="border-collapse:collapse;border-spacing:0px"
                                                                                       width="100%">
                                                                                    <tbody>
                                                                                    <tr style="border-collapse:collapse">
                                                                                        <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px">&nbsp;</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                ${props?.vehicles}
                                   
                                                <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:center center">
                                                        <table align="left" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px;float:left">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:180px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">Condition:</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>

                                                        <table align="right" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="padding:0;Margin:0;width:380px">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px;background-position:left top"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">${props?.condition}</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:center center">
                                                        <table cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px"
                                                               width="100%">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:560px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="center"
                                                                                style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px">
                                                                                <table border="0" cellPadding="0"
                                                                                       cellSpacing="0" height="100%"
                                                                                       role="presentation"
                                                                                       style="border-collapse:collapse;border-spacing:0px"
                                                                                       width="100%">
                                                                                    <tbody>
                                                                                    <tr style="border-collapse:collapse">
                                                                                        <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px">&nbsp;</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:center center">
                                                        <table align="left" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px;float:left">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:180px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">Origin:</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>


                                                        <table align="right" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="padding:0;Margin:0;width:380px">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px;background-position:left top"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">${props?.origin}</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:left top">
                                                        <table cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px"
                                                               width="100%">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:560px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="center"
                                                                                style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px">
                                                                                <table border="0" cellPadding="0"
                                                                                       cellSpacing="0" height="100%"
                                                                                       role="presentation"
                                                                                       style="border-collapse:collapse;border-spacing:0px"
                                                                                       width="100%">
                                                                                    <tbody>
                                                                                    <tr style="border-collapse:collapse">
                                                                                        <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px">&nbsp;</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:left top">
                                                        <table align="left" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px;float:left">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:180px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">Destination:</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>


                                                        <table align="right" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="padding:0;Margin:0;width:380px">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px;background-position:left top"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">${props?.destination}</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="padding:0;Margin:0;padding-left:10px;padding-right:10px;background-position:left top">
                                                        <table cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px"
                                                               width="100%">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:580px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="center"
                                                                                style="padding:0;Margin:0;padding-left:10px;padding-right:10px;padding-top:15px">
                                                                                <table border="0" cellPadding="0"
                                                                                       cellSpacing="0" height="100%"
                                                                                       role="presentation"
                                                                                       style="border-collapse:collapse;border-spacing:0px"
                                                                                       width="100%">
                                                                                    <tbody>
                                                                                    <tr style="border-collapse:collapse">
                                                                                        <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px">&nbsp;</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;background-position:left top">
                                                        <table align="left" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px;float:left">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:180px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px;padding-top:10px;padding-bottom:10px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">Estimated
                                                                                    Ship Date:</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>


                                                        <table align="right" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="padding:0;Margin:0;width:380px">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px;background-position:left top"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px;padding-top:10px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">${props?.date}</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="padding:0;Margin:0;padding-left:10px;padding-right:10px;background-position:left top">
                                                        <table cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px"
                                                               width="100%">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:580px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="center"
                                                                                style="padding:0;Margin:0;padding-bottom:5px;padding-left:10px;padding-right:10px">
                                                                                <table border="0" cellPadding="0"
                                                                                       cellSpacing="0" height="100%"
                                                                                       role="presentation"
                                                                                       style="border-collapse:collapse;border-spacing:0px"
                                                                                       width="100%">
                                                                                    <tbody>
                                                                                    <tr style="border-collapse:collapse">
                                                                                        <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px">&nbsp;</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;background-position:left top">
                                                        <table align="left" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px;float:left">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:180px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px;padding-top:10px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">Trailer
                                                                                    Type:</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>


                                                        <table align="right" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="padding:0;Margin:0;width:380px">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px;background-position:left top"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px;padding-top:10px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">${props?.type}</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                   <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:left top">
                                                        <table cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px"
                                                               width="100%">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:560px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="center"
                                                                                style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px">
                                                                                <table border="0" cellPadding="0"
                                                                                       cellSpacing="0" height="100%"
                                                                                       role="presentation"
                                                                                       style="border-collapse:collapse;border-spacing:0px"
                                                                                       width="100%">
                                                                                    <tbody>
                                                                                    <tr style="border-collapse:collapse">
                                                                                        <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px">&nbsp;</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;background-position:left top">
                                                        <table align="left" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px;float:left">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:180px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px;padding-top:10px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">
                                                                                    Phone:</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>


                                                        <table align="right" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="padding:0;Margin:0;width:380px">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px;background-position:left top"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px;padding-top:10px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">${props?.phone}</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                                  <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:left top">
                                                        <table cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px"
                                                               width="100%">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:560px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="center"
                                                                                style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px">
                                                                                <table border="0" cellPadding="0"
                                                                                       cellSpacing="0" height="100%"
                                                                                       role="presentation"
                                                                                       style="border-collapse:collapse;border-spacing:0px"
                                                                                       width="100%">
                                                                                    <tbody>
                                                                                    <tr style="border-collapse:collapse">
                                                                                        <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px">&nbsp;</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;background-position:left top">
                                                        <table align="left" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px;float:left">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:180px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px;padding-top:10px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">
                                                                                    Email:</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>


                                                        <table align="right" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="padding:0;Margin:0;width:380px">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px;background-position:left top"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px;padding-top:10px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">${props?.email}</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                                  <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:left top">
                                                        <table cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px"
                                                               width="100%">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:560px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="center"
                                                                                style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px">
                                                                                <table border="0" cellPadding="0"
                                                                                       cellSpacing="0" height="100%"
                                                                                       role="presentation"
                                                                                       style="border-collapse:collapse;border-spacing:0px"
                                                                                       width="100%">
                                                                                    <tbody>
                                                                                    <tr style="border-collapse:collapse">
                                                                                        <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px">&nbsp;</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;background-position:left top">
                                                        <table align="left" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px;float:left">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:180px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px;padding-top:10px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">
                                                                                    Name:</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>


                                                        <table align="right" cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="padding:0;Margin:0;width:380px">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px;background-position:left top"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left"
                                                                                style="padding:0;Margin:0;padding-left:5px;padding-top:10px">
                                                                                <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">${props?.name}</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px;background-position:center center">
                                                        <table cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px"
                                                               width="100%">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:560px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="center"
                                                                                style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px">
                                                                                <table border="0" cellPadding="0"
                                                                                       cellSpacing="0" height="100%"
                                                                                       role="presentation"
                                                                                       style="border-collapse:collapse;border-spacing:0px"
                                                                                       width="100%">
                                                                                    <tbody>
                                                                                    <tr style="border-collapse:collapse">
                                                                                        <td style="padding:0;Margin:0px;border-bottom:0px solid #cccccc;background:none;height:1px;width:100%;margin:0px">&nbsp;</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
             </body>
                </html>`
        )
    }
    return tfunc(props)
}

export default Template;
