package dev.jihogrammer.blog.utils;

public class StringUtils {
    public static boolean isEmpty(final String source) {
        return source == null || source.isEmpty();
    }

    public static boolean isNotEmpty(final String source) {
        return !isEmpty(source);
    }
}
