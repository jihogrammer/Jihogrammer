package dev.jihogrammer.blog.utils;

import jakarta.servlet.http.HttpServletRequest;

import static dev.jihogrammer.blog.utils.StringUtils.isNotEmpty;
import static java.util.Objects.nonNull;

public class IPAddressParser {
    private static final String[] IP_HEADER_CANDIDATES = {
        "X-Forwarded-For",
        "Proxy-Client-IP",
        "WL-Proxy-Client-IP",
        "HTTP_X_FORWARDED_FOR",
        "HTTP_X_FORWARDED",
        "HTTP_X_CLUSTER_CLIENT_IP",
        "HTTP_CLIENT_IP",
        "HTTP_FORWARDED_FOR",
        "HTTP_FORWARDED",
        "HTTP_VIA",
        "REMOTE_ADDR"
    };

    public static String getIPAddress(final HttpServletRequest request) {
        for (String header: IP_HEADER_CANDIDATES) {
            String ipFromHeader = request.getHeader(header);
            if (isNotEmpty(ipFromHeader) && !"unknown".equalsIgnoreCase(ipFromHeader)) {
                return ipFromHeader.split(",")[0];
            }
        }
        return request.getRemoteAddr();
    }
}
