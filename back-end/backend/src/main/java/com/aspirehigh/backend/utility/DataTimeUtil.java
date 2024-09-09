package com.aspirehigh.backend.utility;

import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;

public class DataTimeUtil {
	
	// Convert to UTC OffsetDateTime
    public static OffsetDateTime toUtc(OffsetDateTime dateTime) {
        return dateTime.withOffsetSameInstant(ZoneOffset.UTC);
    }

    // Convert to a specific time zone
    public static OffsetDateTime toZone(OffsetDateTime dateTime, String zoneId) {
        return dateTime.atZoneSameInstant(ZoneId.of(zoneId)).toOffsetDateTime();
    }

}
