/* vim: ft=proto
 * Copyright (c) 2018 vesoft inc. All rights reserved.
 *
 * This source code is licensed under Apache 2.0 License,
 * attached with Common Clause Condition 1.0, found in the LICENSES directory.
 */


include "common.thrift"

/*
 *
 *  Note: In order to support multiple languages, all string
 *        have to be defined as **binary** in the thrift file
 *
 */

struct ProfilingStats {
    // How many rows being processed in an executor.
    1: required i64  rows;
    // Duration spent in an executor.
    2: required i64  exec_duration_in_us;
    // Total duration spent in an executor, contains schedule time
    3: required i64  total_duration_in_us;
    // Other profiling stats data map
    4: optional map<binary, binary>  other_stats;
}

// The info used for select/loop.
struct PlanNodeBranchInfo {
    // True if loop body or then branch of select
    1: required bool  is_do_branch;
    // select/loop node id
    2: required i64   condition_node_id;
}

struct Pair {
    1: required string key;
    2: required string value;
}

struct PlanNodeDescription {
    1: required string                          name;
    2: required i64                             id;
    3: required binary                          output_var;
    // other description of an executor
    4: optional list<Pair>                      description;
    // If an executor would be executed multi times,
    // the profiling statistics should be multi-versioned.
    5: optional list<ProfilingStats>            profiles;
    6: optional PlanNodeBranchInfo              branch_info;
    7: optional list<i64>                       dependencies;
}

struct PlanDescription {
    1: required list<PlanNodeDescription>     plan_node_descs;
    // map from node id to index of list
    2: required map<i64, i64>                 node_index_map;
    // the print format of exec plan, lowercase string like `dot'
    3: required binary                        format;
    // the time optimizer spent
    4: required i32                           optimize_time_in_us;
}


struct ExecutionResponse {
    1: required common.ErrorCode        error_code;
    2: required i32                     latency_in_us;  // Execution time on server
    3: optional common.DataSet          data;
    4: optional string                  space_name;
    5: optional string                  error_msg;
    6: optional PlanDescription         plan_desc;
    7: optional string                  comment;        // Supplementary instruction
}


struct AuthResponse {
    1: required common.ErrorCode   error_code;
    2: optional string             error_msg;
    3: optional i64                session_id;
}

service GraphService {
    AuthResponse authenticate(1: string username, 2: string password)

    oneway void signout(1: i64 sessionId)

    ExecutionResponse execute(1: i64 sessionId, 2: binary stmt)

    // Same as execute(), but response will be a json string
    binary executeJson(1: i64 sessionId, 2: binary stmt)
}
